import React from 'react'

const OurStory = () => {
    return (
        <div class="bg-stone-50 min-h-screen text-stone-800 font-sans selection:bg-amber-200">
            

            {/* <!-- Main Content Layout --> */}
            <main class="max-w-5xl mx-auto px-6 py-16 md:py-24">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

                    {/* <!-- Left Column: Sticky Visual / Intro Statement --> */}
                    <div class="md:col-span-5 md:sticky md:top-8 space-y-6">
                        <div class="bg-[#640d14] text-amber-100 p-8 rounded-2xl shadow-xl border-l-8 border-amber-500 relative overflow-hidden">
                            <div class="absolute -right-8 -bottom-8 text-amber-900/40 font-serif text-9xl select-none pointer-events-none">“</div>
                            <p class="text-xl font-serif leading-relaxed italic relative z-10">
                                It started with a sound. Not the clinking of gold or the crisp snap of a luxury box, but the rhythmic, soothing clack-clack-clack of an old wooden loom.
                            </p>
                        </div>

                        {/* <!-- Palette Accent Element --> */}
                        <div class="flex items-center gap-3 px-4 py-2 bg-stone-100 rounded-lg border border-stone-200">
                            <span class="w-3 h-3 rounded-full bg-[#640d14] animate-pulse"></span>
                            <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                            <span class="text-xs text-stone-500 font-medium tracking-wider uppercase">Crafted with Intention</span>
                        </div>
                    </div>

                    {/* <!-- Right Column: Narrative Text --> */}
                    <div class="md:col-span-7 space-y-12 text-lg leading-relaxed text-stone-700">

                        <section class="space-y-4">
                            <p>
                                Growing up, my grandmother, Amara, was the heart of our family. She didn’t have much in the way of material wealth—no sprawling estates or safe deposit boxes—but she possessed an incredible gift. She was a master weaver. Her hands, rough from decades of labor yet incredibly gentle, could transform simple, raw threads into breathtaking tapestries that told stories of our ancestors, of love, and of resilience.
                            </p>
                            <p>
                                I used to sit at her feet for hours, mesmerized by how she could take separate, fragile strands and bind them together into something unbreakable and beautiful.
                            </p>
                        </section>

                        <hr class="border-t border-stone-200" />

                        <section class="space-y-4">
                            <h2 class="text-2xl font-serif font-bold text-amber-950 flex items-center gap-2">
                                <span class="text-amber-500">◆</span> The Spark of Adaptation
                            </h2>
                            <p>
                                When she passed away, the house felt devastatingly quiet. The loom sat silent in the corner. I was completely undone by the grief, feeling like a loose, frayed thread drifting in the wind.
                            </p>
                            <p>
                                A few weeks later, I found a small, weathered velvet pouch hidden at the bottom of her sewing basket. Inside wasn’t yarn. It was a single, tarnished silver ring, crudely wrapped in a vibrant, deep crimson thread—the very last color she had been weaving before she fell ill.
                            </p>
                            <blockquote class="border-l-4 border-amber-950 pl-4 italic text-stone-600 my-6">
                                Holding that ring, I realized something profound. Jewelry shouldn't just be about status or sparkle. It should be a vessel for the stories we carry.
                            </blockquote>
                            <p>
                                I spent the next year locked in a cycle of fierce determination and agonizing trial-and-error. I burned my fingers learning to solder, ruined countless wax molds, and doubted myself every single day. But every time I wanted to throw in the towel, I would look at that silver ring wrapped in red thread sitting on my workbench.
                            </p>
                        </section>

                        <hr class="border-t border-stone-200" />

                        <section class="space-y-4">
                            <h2 class="text-2xl font-serif font-bold text-amber-950 flex items-center gap-2">
                                <span class="text-amber-500">◆</span> From Heartbreak to Heritage
                            </h2>
                            <p>
                                The day I launched our first collection, <span class="font-semibold text-amber-950">The Interwoven Line</span>, I didn't hold a grand party. Instead, I went back to my grandmother's empty house, sat on the floor next to her silent loom, and opened my laptop.
                            </p>
                            <p>
                                The centerpiece of the collection was a minimalist gold cuff, meticulously engraved with fine lines that mimicked the warp and weft of a loom, finished with a subtle, flush-set ruby at the clasp—a nod to the crimson thread.
                            </p>
                            <p>
                                Within hours of going live, the orders started coming in, but it wasn’t the sales that broke me open. It was the messages. A woman bought a necklace to celebrate surviving breast cancer, telling me it represented her "unbroken thread." A young man bought a ring to honor his late father, asking if I could engrave a line from his last letter onto the inner band.
                            </p>
                        </section>

                        {/* <!-- Signature Closing Box --> */}
                        <div class="bg-amber-50 p-6 rounded-xl border border-amber-200/60 mt-12 text-center md:text-left">
                            <p class="font-serif italic text-amber-950 text-xl">
                                "We don't just wear jewelry to look beautiful. We wear it to remember who we are, where we come from, and who wove us into existence."
                            </p>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}

export default OurStory