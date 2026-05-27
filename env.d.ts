/// <reference types="vite/client" />

import type { VNode } from 'vue'

declare global {
	namespace JSX {
		interface Element extends VNode {}
		interface ElementClass {
			$props: Record<string, unknown>
		}
		interface IntrinsicElements {
			[elem: string]: unknown
		}
	}
}
