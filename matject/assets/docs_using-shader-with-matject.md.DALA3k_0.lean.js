import{_ as s}from"./chunks/doggysmurk.D-SPqAo5.js";import{_ as a,c as n,a0 as i,j as t,a as o,G as l,B as d,o as u}from"./chunks/framework.CMtr6uOw.js";const h="/stolen_emojis/doggysmurkw.png",M=JSON.parse('{"title":"Using shader with Matject","description":"","frontmatter":{},"headers":[],"relativePath":"docs/using-shader-with-matject.md","filePath":"docs/using-shader-with-matject.md"}'),c={name:"docs/using-shader-with-matject.md"};function m(g,e,f,p,b,w){const r=d("Badge");return u(),n("div",null,[e[11]||(e[11]=i('<h1 id="using-shader-with-matject" tabindex="-1">Using shader with Matject <a class="header-anchor" href="#using-shader-with-matject" aria-label="Permalink to &quot;Using shader with Matject&quot;">​</a></h1><p>Bedrock shaders come in many types. You have to know what type it is before you give it to Matject.</p><p><a href="#so-which-method-should-you-use"><strong>TL;DR</strong></a><br></p><ul><li><strong>RenderDragon shaders:</strong> For Minecraft &quot;with&quot; RenderDragon graphics engine.<br> The ONLY KIND SUPPORTED by Matject and Minecraft.<br> Files have <code>.material.bin</code> extension (file name suffix), most of the times stored in <code>renderer\\materials</code> structure.<br>  </li><li><strong>HAL shaders (old shaders):</strong> For old Minecraft &quot;without&quot; RenderDragon graphics engine.<br> NOT SUPPORTED by Matject or current versions of Minecraft.<br> Files usually have <code>.fragment</code>/<code>.vertex</code> extension, stored in <code>shaders</code> folder as <code>glsl</code>/<code>hlsl</code>.<br>  </li><li><strong>Deferred/PBR/RTX:</strong> These are technically not shaders. Used to enable/enhance deferred rendering or RTX on Minecraft. (only for rich people <img style="display:inline;vertical-align:text-bottom;" width="24px" alt=":doggysmurk:" src="'+s+'" title="stolen from YSS discord server">)<br> NOT SUPPORTED by Matject.</li></ul><p> </p><hr>   <p>Shaders also come in different types of packaging.</p><ul><li><strong>MCPACK:</strong> ZIP file with different extension. Usually contains <code>.material.bin</code> files alongside related textures. Can be opened with Minecraft.<br> Also supported by Matject auto method.<br>  </li><li><strong>ZIP:</strong> Can be a MCPACK or just a bunch of <code>.material.bin</code> files.<br> Also supported by Matject auto method.</li></ul><h2 id="so-which-method-should-you-use" tabindex="-1">So, which method should you use? <a class="header-anchor" href="#so-which-method-should-you-use" aria-label="Permalink to &quot;So, which method should you use?&quot;">​</a></h2><p>For beginners <strong>auto method</strong> is always the best as it works well for most types.</p><p>It will guide you step-by-step.<br> You don&#39;t have to worry about what file you give to it. It will automatically detect file type, available subpacks, as well as check if the shader is for Windows.</p><p><a href="/docs/method-auto.html"><strong>How to use auto method?</strong></a></p><br><p><strong>Manual method</strong> can be used when you just have <code>*.material.bin</code> files.<br> Intended for a bit advanced users including shader creators.</p><p><a href="/docs/method-manual.html"><strong>How to use manual method?</strong></a></p><br>',17)),t("p",null,[e[0]||(e[0]=t("strong",null,"matjectNEXT",-1)),e[1]||(e[1]=o()),l(r,{type:"warning",text:"BETA"}),e[2]||(e[2]=o(" is somewhat like Minecraft patched.")),e[3]||(e[3]=t("br",null,null,-1)),e[4]||(e[4]=o(" Instead of taking files from user it checks what's the first activated global resource pack. Then it can automatically bring files from the activated pack.")),e[5]||(e[5]=t("br",null,null,-1)),e[6]||(e[6]=o(" Still in BETA. Intended for curious testers. May not work properly for all.")),e[7]||(e[7]=t("br",null,null,-1)),e[8]||(e[8]=o(" (definitely not for you if you don't know how to describe a software bug efficiently ")),e[9]||(e[9]=t("img",{style:{display:"inline","vertical-align":"text-bottom"},width:"24px",alt:":doggysmurkw:",src:h,title:"stolen from YSS discord server"},null,-1)),e[10]||(e[10]=o(")"))]),e[12]||(e[12]=t("p",null,[t("a",{href:"/docs/method-matjectnext.html"},[t("strong",null,"How to use matjectNEXT?")])],-1))])}const k=a(c,[["render",m]]);export{M as __pageData,k as default};
