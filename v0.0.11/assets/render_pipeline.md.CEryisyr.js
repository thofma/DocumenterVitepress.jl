import{_ as e,c as t,o,a4 as a}from"./chunks/framework.2AA9P4h2.js";const f=JSON.parse('{"title":"The rendering process","description":"","frontmatter":{},"headers":[],"relativePath":"render_pipeline.md","filePath":"render_pipeline.md","lastUpdated":null}'),r={name:"render_pipeline.md"},i=a('<h1 id="The-rendering-process" tabindex="-1">The rendering process <a class="header-anchor" href="#The-rendering-process" aria-label="Permalink to &quot;The rendering process {#The-rendering-process}&quot;">​</a></h1><p>DocumenterVitepress combines two formidable packages - <a href="https://github.com/JuliaDocs/Documenter.jl" target="_blank" rel="noreferrer">Documenter.jl</a>, which consumes documentation from Markdown files and Julia packages, and <a href="https://github.com/vuejs/vitepress" target="_blank" rel="noreferrer">VitePress</a>, which generates websites from Markdown files.</p><p>Documentation is therefore generated in two &quot;stages&quot;. These are both executed by the first and main <code>render</code> function, in <code>src/writers.jl</code>.</p><h2 id="Documenter.jl" tabindex="-1">Documenter.jl <a class="header-anchor" href="#Documenter.jl" aria-label="Permalink to &quot;Documenter.jl {#Documenter.jl}&quot;">​</a></h2><p>First, the Documenter.jl pipeline is run. It takes as input the concerned Julia modules and Markdown files, and excecutes all doctests and runnable blocks.</p><p>From there, Documenter uses a plugin provided to the <code>format</code> keyword of <code>makedocs</code> to render to some viewable form. This is where <code>DocumenterVitepress.jl</code> steps in, with the <a href="/LuxDLDocumenterVitepress.jl/v0.0.11/api#DocumenterVitepress.MarkdownVitepress"><code>MarkdownVitepress</code></a> plugin.</p><p>That plugin takes in the Documenter <code>Document</code> which is generated once Documenter has parsed, run and expanded all the input Markdown files, and converts it to VitePress-flavoured Markdown, which is saved in <code>docs/build/.documenter</code> by default.</p><p>This conversion is done by the sometimes-recursive multiple dispatch based <code>render</code> function.</p><h2 id="VitePress" tabindex="-1">VitePress <a class="header-anchor" href="#VitePress" aria-label="Permalink to &quot;VitePress {#VitePress}&quot;">​</a></h2><p>VitePress is a NodeJS package which takes in Markdown files and generates a static site.</p><p>The first step we take is to replace several options in VitePress&#39;s configuration file by our own, if the user has not explicitly specified them. Notable ones are:</p><ul><li><p><code>base</code>: the base path of the website. This is required, because Vitepress cannot generate relocatable websites - so we must know the exact path to our <code>index.html</code> when building.</p></li><li><p><code>sidebar</code>: the sidebar of the page, autogenerated from <code>pages</code> in <code>makedocs</code>.</p></li></ul><p>Then, we simply ensure that all Node packages are installed, and run <code>npm run docs:build</code>, which builds a website.</p><p>In order to locally develop, run <code>npm run docs:dev</code> in another terminal. This will create a server.</p><h2 id="Finalization" tabindex="-1">Finalization <a class="header-anchor" href="#Finalization" aria-label="Permalink to &quot;Finalization {#Finalization}&quot;">​</a></h2><p>Finally, if deploying, we move files around such that the only thing deployed is the rendered webpage.</p><p>This means that the contents of <code>build/.documenter</code> are deleted, and the contents of <code>build/final_site</code> are moved into <code>build</code> proper. This allows the complete site to be committed directly.</p><div class="warning custom-block"><p class="custom-block-title">Warning</p><p>This will probably not work if using a custom, non-detectable deployment configuration!</p></div>',18),n=[i];function s(d,c,l,p,h,u){return o(),t("div",null,n)}const b=e(r,[["render",s]]);export{f as __pageData,b as default};
