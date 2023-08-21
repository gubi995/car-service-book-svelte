<script lang="ts">
	import { page } from '$app/stores';

	export let data;
</script>

<header class="border border-b-cyan-600 px-7 py-4">
	<a href="/">
		<h1 class="text-xl font-black">Car service book</h1>
	</a>
</header>
<main>
	<div class="grid h-[calc(100vh-62px)] grid-cols-[250px_auto]">
		<aside class="sticky h-full border-r border-r-cyan-600 px-8 py-5">
			<h2 class="mb-2 font-semibold">Registered cars</h2>
			<nav class="flex flex-col gap-10">
				<ul>
					{#if data.cars.length}
						{#each data.cars as { chassisNumber, make, model, plateNumber } (chassisNumber)}
							{@const href = `/cars/${chassisNumber}`}
							<li>
								<a {href}>
									<span class="text-sm {$page.url.pathname === href && 'font-semibold'}">
										{make}
										{model} <span>({plateNumber})</span>
									</span>
								</a>
							</li>
						{/each}
					{:else}
						<li>
							<span class="text-sm">No car registered yet.</span>
						</li>
					{/if}
				</ul>
				<a
					href="/cars/new"
					class="mx-[-2rem] flex justify-center bg-cyan-900 p-3 text-sm text-cyan-200"
				>
					Add a new car +
				</a>
			</nav>
		</aside>
		<section style="scrollbar-gutter: stable;" class="overflow-auto">
			<slot />
		</section>
	</div>
</main>
