<!-- components/AlertModal.vue -->
<template>
  <!-- 背景遮罩层 -->
    <transition
            enter-active-class="ease-out duration-300"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="ease-in duration-200"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
    >
        <div v-if="show" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity">
            <!-- 弹窗主体 -->
            <div class="fixed inset-0 flex items-center justify-center p-4">
                <transition
                        enter-active-class="ease-out duration-300"
                        enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to-class="opacity-100 translate-y-0 sm:scale-100"
                        leave-active-class="ease-in duration-200"
                        leave-from-class="opacity-100 translate-y-0 sm:scale-100"
                        leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <div
                            v-if="show"
                            class="relative w-full max-w-md bg-white rounded-2xl p-6 shadow-xl"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-title"
                    >
                        <!-- 图标装饰 -->
                        <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                            <svg class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                            </svg>
                        </div>

                        <!-- 内容区域 -->
                        <div class="mt-4 text-center">
                            <h3 id="modal-title" class="text-lg font-semibold text-gray-900">
                                {{ title }}
                            </h3>
                            <div class="mt-2">
                                <p class="text-sm text-gray-500">
                                    {{ message }}
                                </p>
                            </div>
                        </div>

                        <!-- 操作按钮 -->
                        <div class="mt-6 flex justify-center gap-3">
                            <button
                                    @click="close"
                                    class="inline-flex justify-center rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-colors"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
    show: Boolean,
    title: {
        type: String,
        default: 'Message'
    },
    message: String
})

const emit = defineEmits(['update:show'])

const close = () => {
    emit('update:show', false)
}

// 点击外部关闭
const onClickOutside = (event) => {
    if (event.target.classList.contains('bg-black/50')) {
        close()
    }
}

// ESC 关闭
const onKeydown = (event) => {
    if (event.key === 'Escape') {
        close()
    }
}
</script>