// get path waypoints between two points
function Get_Path(StartPt, EndPt, Obstacles){
    // initialize waypoints
    var WayPts = [StartPt, EndPt];

    // adjust obstacles as rectangles
    var MyObstacles = Distribute_Obstacles_Points(Obstacles);
    
    for (var i = 0; i < MyObstacles.length; i++){
        for (var j = 0; j < WayPts.length - 1; j++){
            // get current two waypoints
            var MyWayPts = WayPts.slice(j, j + 2);
            
            // get current obstacle
            var MyObstacle = MyObstacles[i];

            // try to add plaid waypoint
            MyWayPts = Add_Plaid_Line_Waypoint(MyWayPts, MyObstacles);
            
            // add detour point after the start point 
            MyWayPts = Add_Detour_Points(MyWayPts, MyObstacle);

            // update the overal waypoint
            WayPts = Integrate_Waypoints(WayPts, j, MyWayPts);

            // reset waypoints for loop index to re-check added point
            if (MyWayPts.length == 3){
                j = -1; 
            }
            
        }
    }
  
    return WayPts
}

// re-distribute all obstacles points
function Distribute_Obstacles_Points(MyRecs){
    var MyRecsOut = [];

    for (var i = 0; i < MyRecs.length; i++){
        MyRecsOut[i] = Distribute_Obstacle_Points(MyRecs[i])
    }

    return MyRecsOut;
}

// re-distribute obstacle points
function Distribute_Obstacle_Points(MyRec){
    var Pt1, Pt2, Pt3, Pt4, MyObPts;

    // get obstacle boundary
    var MyBound = Get_Rec_Bound(MyRec);

    // distribute 4 points and generate plaid point
    for (var i = 0; i < MyRec.Port.length; i++){
        var Pt = MyRec.Port[i];

        if(Pt.x < MyBound.MidX && Pt.y < MyBound.MidY){
            Pt1 = {x: MyBound.MinX, y: MyBound.MinY}; 

        }else if(Pt.x > MyBound.MidX && Pt.y < MyBound.MidY){
            Pt2 = {x: MyBound.MaxX, y: MyBound.MinY}; 

        }else if(Pt.x > MyBound.MidX && Pt.y > MyBound.MidY){
            Pt3 = {x: MyBound.MaxX, y: MyBound.MaxY}; 

        }else if(Pt.x < MyBound.MidX && Pt.y > MyBound.MidY){
            Pt4 = {x: MyBound.MinX, y: MyBound.MaxY}; 
        }
    }

    // correct 4 poitns as plaid poitns
    MyObPts = {name: MyRec.name, 
               Port: [Pt1, Pt2, Pt3, Pt4]};

    return MyObPts;
}

// add plaid line waypoint between two waypoints
function Add_Plaid_Line_Waypoint(MyWayPts, MyObstacles){
    var Result;

    // get start and end points
    var StartPt = MyWayPts[0];
    var EndPt   = MyWayPts[1];

    // build direct line waypoints
    if (StartPt.x != EndPt.x && StartPt.y != EndPt.y){
        var MidPt1, MidPt2, WayPts1, WayPts2;
        [MidPt1, MidPt2] = Get_Placid_Mid_Point(StartPt, EndPt);
        WayPts1 = [StartPt, MidPt1, EndPt];
        WayPts2 = [StartPt, MidPt2, EndPt];

    }else {
        // no line waypoint needed since they can
        // generate plaid(horizontal or vertial) line
        return MyWayPts
    }

    // check if new waypoints is intersect to the current obstacle
    // check if the plaid waypoints is inside of all obstacles
    if (!Is_Obstacles_Among(WayPts1, MyObstacles) &&
        !Is_Inside_Obstacles(MidPt1, MyObstacles)){
        // return waypoints inserted via line waypoint 1
        Result = WayPts1;

    }else if(!Is_Obstacles_Among(WayPts2, MyObstacles) &&
             !Is_Inside_Obstacles(MidPt2, MyObstacles)){
        // return waypoints inserted via line waypoint 2
        Result = WayPts2;

    }else{
        // return original waypoints due to both intersections
        Result = MyWayPts;

    }

    return Result
}

// add detour points between two waypoints
function Add_Detour_Points(MyWayPts, MyObstacle){
    var Result, MyResult;
    var ObName;
    
    // MyWayPts = [Point1, Point2]
    if (Is_Obstacle_Among(MyWayPts, MyObstacle) ){
        // generate 4 detour point outside of each corner of the rectangle
        var MyDePts  = Get_Detour_Points(MyObstacle);

        // initialize waypoints distance
        var Distance = 9999, MyDistance;

        // get potential waypoints with four potential line waypoints 
        for (var i = 0; i < MyDePts.length; i++){    
            // integrate the current detour line
            var WayPts = [MyWayPts[0], MyDePts[i]];
            
            // check if the two waypts cross the current obstacle
            if (!Is_Obstacle_Between(WayPts, MyObstacle) &&
                !Is_Detour_in_Extended_Line(WayPts, i)){

                // get current waypoints result
                MyResult = [...WayPts, MyWayPts[1]];

                // update WaysPtSet based on shorted distance
                MyDistance = Get_Distance_Among(MyResult);

                if (MyDistance < Distance){
                    // update distance
                    Distance = MyDistance;

                    // update detour parameters
                    ObName = MyObstacle.name;

                    // integrate with the current end point
                    Result = MyResult;
                }
            }
            
        }
        
        // update detour paramter dictionary
        // (try to avoid overlapped line)
        if (ObName in DictDetourL){
            // update current obstacle parameter
            DictDetourL[ObName] += 1;
        }else{
            // initialize current obstacle parameter
            DictDetourL[ObName] = 1;
        }

    }else{
        // added placid waypoint means no obstacles among,
        // no need to use detour points
        // MyWayPts = [Point1, Placid Point, Point2]
        Result = MyWayPts;
    }
    return Result
}

// generate placid line middle point
function Get_Placid_Mid_Point(Pt1, Pt2){
    // initialize two mid points
    var MidPt1 = {x: Pt1.x, y: Pt2.y, Dir: {x: 0, y: -1}};
    var MidPt2 = {x: Pt2.x, y: Pt1.y, Dir: {x: 1, y: 0}};

    // set middle point 1 priority for two points' direction
    if (Pt1.Dir.x == 0 || Pt2.Dir.y == 0){
        return [MidPt1, MidPt2];
    }else{
        return [MidPt2, MidPt1];
    }
}

// generate break and extened point
function Get_Break_Extend_Point(PtIn, Obstacles){
    // get subline break part
    var BreakPts = PtIn;
    var BrkScale = 1;
    var Dir = {};

    // find break point and exit the loop
    while (Is_Inside_Obstacles(BreakPts, Obstacles)) {
        // get subline break point in 4 directions
        for (var i = 0; i < 4; i++){
            // get current subline direction dictionary
            Dir = DictDirN[i];

            // get current subline break point
            BreakPts = {x : PtIn.x + DictSubL.Break * Dir.x * BrkScale,
                        y : PtIn.y + DictSubL.Break * Dir.y * BrkScale};

            if (!Is_Inside_Obstacles(BreakPts, Obstacles)) {
                break;
            }
        }
        BrkScale += 1;
    }

    // get subline moving part
    // find which obstacle does the port belong to
    var ObName = Get_Inside_Obstacle(PtIn, Obstacles);

    // update subline scake dictionary (various subline length at each module)
    if (ObName in DictSubMScl){DictSubMScl[ObName] += 1;}
    else{DictSubMScl[ObName] = 1;}

    // calculate moving length
    var MoveL = DictSubL.Base + DictSubL.Move * DictSubMScl[ObName] ;

    // merge two parts: start point -> break point + moving line
    return {x : BreakPts.x + Dir.x * MoveL,
            y : BreakPts.y + Dir.y * MoveL,
            Dir: Dir};
}

// check if the waypoints are placid
function Is_Placid_Among(MyWayPts){
    for (var i = 0; i < MyWayPts.length - 1; i++){
        if (MyWayPts[i].x != MyWayPts[i+1].x &&
            MyWayPts[i].y != MyWayPts[i+1].y){
            return false;
        }
    }
    return true
}

// check if the current point is inside of all obstacles
function Is_Inside_Obstacles(MyPt, MyRecs){
    for (var i = 0; i < MyRecs.length; i++){
        // check if it is inside of the current obstacle
        if (Is_Inside_Obstacle(MyPt, MyRecs[i])){
            return true
        }
    }
    return false
}

// check if the current point is inside of the current obstacle
function Is_Inside_Obstacle(MyPt, MyRec){
    // determin max and min coordinates
    var MyBound = Get_Rec_Bound(MyRec);
       
      // check if the point is inside of the rectangle
    if (MyPt.x > MyBound.MinX && MyPt.x < MyBound.MaxX && 
        MyPt.y > MyBound.MinY && MyPt.y < MyBound.MaxY){
        return true  
    }else {
        return false
    }
      
}

// check which obstacle is the point in
function Get_Inside_Obstacle(MyPt, MyRecs){
    for (var i = 0; i < MyRecs.length; i++){
        // check if it is inside of the current obstacle
        if (Is_Inside_Obstacle(MyPt, MyRecs[i])){
            return MyRecs[i].name;
        }
    }

    return "unfound inside obstacle!"
}

// check if multipe waypoints line across all obstacles
function Is_Obstacles_Among(MyWayPts, Obstacles){
    for (var i = 0; i < Obstacles.length; i++){ 
        if (Is_Obstacle_Among(MyWayPts, Obstacles[i])){
            // return immediately if intersection at any two waypoints
            return true
        }      
    }

    // no intersection
    return false
}

// check if multipe waypoints line across the obstacle
function Is_Obstacle_Among(MyWayPts, MyObstacle){
    for (var i = 0; i < MyWayPts.length - 1; i++){
        var MyBiWayPts = MyWayPts.slice(i, i + 2);     
        if (Is_Obstacle_Between(MyBiWayPts, MyObstacle)){
            // return immediately if intersection at any two waypoints
            return true
        } 
    }

    // no intersection
    return false
}

// check if two waypoints line across the obstacle
function Is_Obstacle_Between(MyWayPts, MyObstacle){
    // get line 1 points
    var A = MyWayPts[0];
    var B = MyWayPts[1];

    // initialize line 2 points
    var C, D;                             

    // generate 4 line points array
    var MyObPorts = MyObstacle.Port;
    // (eg: [A, B, C, D] -> [A, B, C, D, A] -> [AB, BC, CD, DA])
    MyObPorts = [...MyObPorts, MyObPorts[MyObPorts.length - 1]];
    for (var i = 0; i < MyObPorts.length - 1; i++){
        // get line 2 points
        C = {x: MyObPorts[i].x,     y: MyObPorts[i].y}
        D = {x: MyObPorts[i + 1].x, y: MyObPorts[i + 1].y}

        // check intersection
        if (Is_Lines_Intersection(A, B, C, D)){
            // return immediately if intersection at any boundary of obstacle
            return true
        }
    }

    // no intersection
    return false
}

// check if the two is intersected or not
function Is_Lines_Intersection(A, B, C, D){
    // Calculate the direction vectors of the two lines
    var direction1 = { x: B.x - A.x, y: B.y - A.y };
    var direction2 = { x: D.x - C.x, y: D.y - C.y };

    // Calculate the denominator for the intersection formula
    var denominator = direction1.x * direction2.y - direction1.y * direction2.x;

    // Check if the lines are parallel or coincident
    if (denominator === 0) {
        return false; // Lines are parallel or coincident, no intersection
    }

    // Calculate the numerator for the intersection formula
    var numerator1 = (C.x - A.x) * direction2.y - (C.y - A.y) * direction2.x;
    var numerator2 = (C.x - A.x) * direction1.y - (C.y - A.y) * direction1.x;

    // Calculate the parameters t1 and t2 for the intersection point
    var t1 = numerator1 / denominator;
    var t2 = numerator2 / denominator;

    // Check if the intersection point lies within the line segments
    if (t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1) {
    return true; // Lines intersect
    }

    return false; // Lines do not intersect
}

// check if the current waypoint and detour point line
// are not current detour point extended line
function Is_Detour_in_Extended_Line(WayPts, DetourIndex){
    // get line between the current waypoint and detour point
    var MyLine = Get_Linear_Line(WayPts[0], WayPts[1]);
    
    // get extended line
    var k;
    switch (DetourIndex){
        case 0: k = 1; break;   // "\" line      
        case 1: k = -1; break;    // "/" line  
        case 2: k = 1; break;   // "\" line      
        case 3: k = -1; break;    // "/" line  
    }

    var ExtLine = Get_Linear_Line2(WayPts[1], k);

    // check if they are the same
    return Is_Two_Lines_Same(MyLine, ExtLine)
}

// check if two lines are the same
function Is_Two_Lines_Same(Line1, Line2){
    // get non-zero division parameters
    var DividPara1, DividPara2;
    if      (Line1.A != 0){DividPara1 = Line1.A;}
    else if (Line1.B != 0){DividPara1 = Line1.B;}
    else if (Line1.C != 0){DividPara1 = Line1.C;}

    if      (Line2.A != 0){DividPara2 = Line2.A;}
    else if (Line2.B != 0){DividPara2 = Line2.B;}
    else if (Line2.C != 0){DividPara2 = Line2.C;}

    // chekc if tow line are the same using normalization and raw comparison
    if (Math.abs(Line1.A / DividPara1 - Line2.A / DividPara2) < 0.01 &&
        Math.abs(Line1.B / DividPara1 - Line2.B / DividPara2) < 0.01 && 
        Math.abs(Line1.C / DividPara1 - Line2.C / DividPara2) < 0.01){
        return true     
        }
    
    return false
}

// get distance among  multiple points
function Get_Distance_Among(Points) {
    var Distance = 0, StartPt, EndPt;

    // append each distance
    for (i = 0; i < Points.length - 1; i++){  
        StartPt = Points[i];
        EndPt   = Points[i + 1];
        Distance += Get_Distance_Between(StartPt, EndPt);
    }
    return Distance
}
// get distance between two points
function Get_Distance_Between(A, B) {
    return Math.sqrt((A.x - B.x) ** 2 + (A.y - B.y) ** 2);
}

// get the 4 detour points around the rectangle
function Get_Detour_Points(MyRec){
    // determin max and min coordinates
    var MyBound = Get_Rec_Bound(MyRec);

    // generate four points at the boundary corners
    var MyDePts = [{x : MyBound.MinX, y : MyBound.MinY},
                   {x : MyBound.MaxX, y : MyBound.MinY},
                   {x : MyBound.MaxX, y : MyBound.MaxY},
                   {x : MyBound.MinX, y : MyBound.MaxY}];

    // get detour additional extention factor
    var DeFactors;
    if (typeof DictDetourL[MyRec.name] == "undefined"){
        DeFactors = 0;
    }else{
        DeFactors = DictDetourL[MyRec.name];
    }

    // generate 4 detour points with the recent extention
    var MyShift  = [];
 
    for (var i = 0; i < MyDePts.length; i++){ 
        // generate the current shift value
        MyShift[i] = DetourBaseL + DetourAddL * DeFactors;
        
        // update the detour point based on shift value and direction
        MyDePts[i] = {x : MyDePts[i].x + MyShift[i] * DictDirD[i].x, 
                      y : MyDePts[i].y + MyShift[i] * DictDirD[i].y,
                      Dir: DictDirD[i]};
    }

    return MyDePts
}

// get the closest point on the polyline
function Get_Closest_Polyline_Point(Pt, WayPts){
    let PtOut = null;
    let MinDis = Infinity;

    for (let i = 1; i < WayPts.length - 1; i++) {
        let WayPt = WayPts[i];
        let d = Get_Distance_Between(Pt, WayPt);
        
        if (d < MinDis) {
            MinDis = d;
            PtOut = WayPt;
        }
    }

    return PtOut;
}

// // get the closest point to the line
// function Get_Closest_Line_Point(p, a, b) {
//     let ap = { x: p.x - a.x, y: p.y - a.y };
//     let ab = { x: b.x - a.x, y: b.y - a.y };

//     let abSquared = ab.x * ab.x + ab.y * ab.y;
//     let ap_dot_ab = ap.x * ab.x + ap.y * ab.y;
//     let t = ap_dot_ab / abSquared;

//     // Clamp t to [0, 1] to keep the point on the segment
//     t = Math.max(0, Math.min(1, t));

//     // Compute the closest point
//     return {
//         x: a.x + t * ab.x,
//         y: a.y + t * ab.y
//     };
// }

// get boundary paramters of the rectangle
function Get_Rec_Bound(MyRec){
   // determin max and min coordinates
   var MyRecPort = MyRec.Port;
   var MaxX = Math.max(MyRecPort[0].x, MyRecPort[1].x, 
                       MyRecPort[2].x, MyRecPort[3].x);
   var MinX = Math.min(MyRecPort[0].x, MyRecPort[1].x, 
                       MyRecPort[2].x, MyRecPort[3].x);
   var MaxY = Math.max(MyRecPort[0].y, MyRecPort[1].y, 
                       MyRecPort[2].y, MyRecPort[3].y);
   var MinY = Math.min(MyRecPort[0].y, MyRecPort[1].y, 
                       MyRecPort[2].y, MyRecPort[3].y);

   // determin midpoints between max and minimum value
   var MidX = (MaxX + MinX) / 2;
   var MidY = (MaxY + MinY) / 2;

   // integrate them
   var MyBound = {MaxX : MaxX, MinX : MinX, 
                  MaxY : MaxY, MinY : MinY,
                  MidX : MidX, MidY : MidY};

   return MyBound;
}

// integrate overall waypoint
// (left part waypts + my waypts + right part waypyts)
function Integrate_Waypoints(WayPts, i, MyWayPts){
    // update the overal waypoint
    var ArrayLeft, ArrayRight;
    if (i == 0){
        ArrayLeft  = [];
        ArrayRight = WayPts.slice(i + 2, WayPts.length);
    }else if (i == WayPts.length - 1){
        ArrayLeft  = WayPts.slice(0, i);
        ArrayRight = [];
    } else {
        ArrayLeft  = WayPts.slice(0, i);
        ArrayRight = WayPts.slice(i + 2, WayPts.length);
    }

    return [...ArrayLeft, ...MyWayPts, ...ArrayRight];  

}

// remove partial waypoint to eliminate repeated line
function Remove_Repeated_Line_Waypoints(WayPts){
    var MyWayPts = [WayPts[0], WayPts[1]];

    for (var i = 2; i < WayPts.length; i++){
        // get last 2nd, last and current waypoints
        var Pt0   = WayPts[i-2];
        var Pt1   = WayPts[i-1];
        var PtNow = WayPts[i];

        // check if the 3 waypoints are in the same line
        if ((Pt0.x == Pt1.x && Pt0.x == PtNow.x) ||
            (Pt0.y == Pt1.y && Pt0.y == PtNow.y)){
            // repeated line: remove the last waypoint
            MyWayPts.pop();
            }

        // append the current waypoint due to 
        MyWayPts.push(PtNow);
            
    }
  
    
    return MyWayPts
}

// get linear function parameters(Ax + By + C = 0)
// two points
function Get_Linear_Line(Pt1, Pt2){
    var A = Pt1.y - Pt2.y;
    var B = Pt2.x - Pt1.x;
    var C = Pt1.x * Pt2.y - Pt2.x * Pt1.y;

    return {A : A, B : B, C : C}
}

// get linear function parameters(Ax + By + C = 0)
// one point and a slop
function Get_Linear_Line2(Pt, k){
    var A = 1;
    var B = -k;
    var C = -(A * Pt.x + B * Pt.y);

    return {A : A, B : B, C : C}
}

// // pick up one point the farest to the line
/* function Pick_Detour_Point(MyWayPts, MyDePts, MyObstacle){
    var WayPtsStart, WayPtsEnd, WayPtsSet = [];

    // get potential waypoints with four potential line waypoints 
    for (i = 0; i < MyDePts.length; i++){    
        // start point -> line waypoint -> detour point   
        WayPtsStart = Add_Plaid_Line_Waypoint([MyWayPts[0], MyDePts[i]], MyObstacle);

        // detour point -> line waypoint -> end point
        WayPtsEnd = Add_Plaid_Line_Waypoint([MyDePts[i], MyWayPts[1]], MyObstacle);

        // integrate them(delete repeated line waypoint)
        WayPtsSet[i] = [...WayPtsStart, ...WayPtsEnd.slice(1, WayPtsEnd.length)];

    }

} */

// get two direct line points based on two waypoints and detour point
/* function Get_Direct_Line_Points(MyWayPts, MyDePt){
    var MidPts = [];

    if (MyWayPts[0].x == MyWayPts[1].x){
        // shift x direction to get points
        MidPts[0] = {x : MyDePt.x, y : MyWayPts[0].y};
        MidPts[1] = {x : MyDePt.x, y : MyWayPts[1].y};

    } else if (MyWayPts[0].y == MyWayPts[1].y){
        // shift y direction to get points
        MidPts[0] = {x : MyWayPts[0].x, y : MyDePt.y};
        MidPts[1] = {x : MyWayPts[1].x, y : MyDePt.y};
    }

    return MidPts
} */

// get detour end point on the two points straight line
/* function Add_Detour_End_Point(MyWayPts, MyObstacle){
    var WayPts, DePtEnd, MyDePtEnd, MyDistance, Distance = 9999;
    
    // get start and end points
    var A = MyWayPts[0];
    var B = MyWayPts[1];
    
    // get obstacle boundary
    MyBound = Get_Rec_Bound(MyObstacle);

    // distribute obstacle point
    var MyObPts = [...MyObstacle, MyObstacle[MyObstacle.length - 1]];
    
    // get intersected points
    for (var i = 0; i < MyObPts.length - 1; i++){
        // get line 2 points
        C = {x: MyObPts[i].x,     y: MyObPts[i].y}
        D = {x: MyObPts[i + 1].x, y: MyObPts[i + 1].y}
  
        if (Is_Lines_Intersection(A, B, C, D)){
            // get detour point
            MyDePtEnd = Get_Lines_Intersected_Point(A, B, C, D);

            // shift the point outter of the obstacle
            if (MyDePtEnd.x == MyBound.MaxX){
                MyDePtEnd.x += 10;
            }else if (MyDePtEnd.x == MyBound.MinX){
                MyDePtEnd.x -= 10;
            }else if (MyDePtEnd.y == MyBound.MaxY){
                MyDePtEnd.y += 10;
            }else if (MyDePtEnd.y == MyBound.MinY){
                MyDePtEnd.y -= 10;
            }else{
                console.log(MyDePtEnd);
                console.log("Is not lied on the obstacle:")
                console.log(MyObstacle)
            }

            // check if the points line across obtacle
            if (!Is_Obstacle_Between([MyDePtEnd, MyWayPts[1]], MyObstacle)){
                // compare the distance
                MyDistance = Get_Distance_Between(MyDePtEnd, MyWayPts[1]);
                if (MyDistance < Distance){
                    // update detour end point with shorter distance
                    Distance = MyDistance;
                    DePtEnd  = MyDePtEnd;
                }
            }
        }
    }

    // integrate the current waypoint and detour waypoint
    WayPts = [MyWayPts[0], DePtEnd, MyWayPts[1]];

    return WayPts
} */

// get intersected point
/* function Get_Lines_Intersected_Point(A, B, C, D){
    // get linear line 1(AB) and 2(CD) 
    var A1 = A.y - B.y;
    var B1 = B.x - A.x;
    var C1 = A.x * B.y - B.x * A.y;
  
    var A2 = C.y - D.y;
    var B2 = D.x - C.x;
    var C2 = C.x * D.y - D.x * C.y;

    // get intersected point
    var x = (B1*C2-B2*C1)/(A1*B2-A2*B1);
    var y = (C1*A2-C2*A1)/(A1*B2-A2*B1);

    return {x : x, y : y};
} */