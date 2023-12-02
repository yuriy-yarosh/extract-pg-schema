import{_ as e,o as a,c as t,O as r}from"./chunks/framework.6d15b5d0.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/extract-pg-schema.materializedviewcolumn.references.md","filePath":"api/extract-pg-schema.materializedviewcolumn.references.md"}'),s={name:"api/extract-pg-schema.materializedviewcolumn.references.md"},i=r('<p><a href="./">Home</a> &gt; <a href="./extract-pg-schema.html">extract-pg-schema</a> &gt; <a href="./extract-pg-schema.materializedviewcolumn.html">MaterializedViewColumn</a> &gt; <a href="./extract-pg-schema.materializedviewcolumn.references.html">references</a></p><h2 id="materializedviewcolumn-references-property" tabindex="-1">MaterializedViewColumn.references property <a class="header-anchor" href="#materializedviewcolumn-references-property" aria-label="Permalink to &quot;MaterializedViewColumn.references property&quot;">​</a></h2><p>If views are resolved, this will contain the references from the source column in the table that this view references. Note that if the source is another view, that view in turn will be resolved if possible, leading us to a table in the end.</p><p><strong>Signature:</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">references</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> ColumnReference[]</span><span style="color:#89DDFF;">;</span></span></code></pre></div>',5),n=[i];function c(o,l,p,m,h,d){return a(),t("div",null,n)}const u=e(s,[["render",c]]);export{_ as __pageData,u as default};