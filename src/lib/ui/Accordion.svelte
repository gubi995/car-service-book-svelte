<script lang="ts">
	export let label: string;

	let isOpen = false;
</script>

<div>
	<div class="mt-3 flex items-start justify-between">
		<h3 class="font-semibold">{label}</h3>
		<button
			class={`h-7 w-7 rounded-full bg-cyan-800 text-xl font-semibold text-teal-200 transition-all ${
				isOpen ? 'rotate-45' : 'rotate-0'
			}`}
			on:click={() => (isOpen = !isOpen)}
		>
			+
		</button>
	</div>
	<div class={`grid ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} `}>
		<div class="overflow-hidden"><slot /></div>
	</div>
</div>
