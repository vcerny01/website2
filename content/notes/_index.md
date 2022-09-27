---
layout: note
title: Notes
date: 2022-07-29
---
<style>
    .topic {
        display: flex;
        flex-direction: column;
        max-width: 300px;
        max-height: 250px;
        border-radius: 2px;
        border: 4px solid var(--secondary-text-color);
        background-color: var(--bg-color-tinted);
        outline: none;
    }
    .topic div{
        color: var(--text-color);
    }
    @media only screen and (max-width: 700px) {
        .topic {
            max-height: 200px;
        }
    }
    .topic:hover {
        text-decoration: none;
    }
    .topic:hover {
        /* border-color: var(--link-color); */
        background-color: var(--secondary-bg-color);
    }
    .topic-img-container {
        min-height: 33%;
        width: 100%;
        border-bottom: 2px solid var(--secondary-text-color);
        margin-bottom: 4px;
    }
    .topic-img-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
    .topic-desc-container {
        height: fit-content;
        padding: 0rem 1rem 1rem;
    }
    .topic-title {
        text-align: center;
        font-size: 1.4em;
    }
    .topic-desc {
        margin-top: 5px;
        font-size: 0.9em;
        font-style: italic;
        text-align: center;
    }
    .topics {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        max-width: 700px;
        margin: 0 auto;
        margin-top: 2rem;
}
</style>

## Purpose
I don't thinks complex note-taking systems, e.g., zettelkasten, are useful. In fact, I view notes only as a medium between material I study and my thinking. If I could remember everything I read, I wouldn't take notes, I would write essays.

I put some of my notes on this website for the following reasons:

1. **Quick reference**

It has proven useful for me to have a website over content and features of which I have full control.

2. **Helping others**

Some people could find my notes useful, so why wouldn't I share them?

## Organization
First of all, I don't put all of my notes online. Plenty of notes I've written on paper, and I don't intent to digitize them. Also, more practical notes (especially personal stuff) I have in a seperate text-based system.

I share two kinds of notes:

1. **Notes from school**

They are are seperated into grades and further into courses (subjects). They are structured hierarchically. There is very little linking between them.

2. **Notes from my own studies**

They are non-hierarchically structured. They are frequently linked to each other and organically grouped by topics. (see below)

## Get Started
Start exploring my notes from school **[HERE](/notes/school)**.

For more useful resources and interesting blogs, here's my list of [cool websites](/notes/cool-websites).

Other notes by topics:

<div class="filter-field">
    <input id="filter" onkeyup="filterStuff()" , placeholder="Filter items">
    <script defer>
        function filterStuff() {
            var input = document.getElementById("filter");
            var filter = input.value.toLowerCase();
            var elements = document.getElementsByClassName("topic");
            for(let i = 0; i < elements.length; i++){
                txt = elements[i].textContent;
                if (txt.toLowerCase().includes(filter)){
                    elements[i].style.display = ""
                }
                else {
                    elements[i].style.display = "none";
                }
            }  
        }
    </script>
</div>

<div class="topics">
{{< topic
    link="/notes/ancient-greece" 
    title="Ancient Greece"
    img-src="/images/main/cover-ancient-greece.webp"
    description="Briefly covering the whole history of Ancient Greece, from the Minoan civilization to Roman occupati    on. Written in English."
>}}
{{< topic
    link="/notes/music-theory"
    title="Music Theory"
    img-src="/images/main/cover-music-theory.webp"
    description="Reference to concepts from music theory (including harmony). All written in Czech."
>}}
{{< topic
    link="/notes/ancient-philosophy"
    title="Ancient Philosophy"
    img-src="/images/main/cover-ancient-philosophy.webp"
    description="Ancient philosophers, mostly from Greece and Rome. Written in English"
>}}
{{< topic
    link="/notes/latin"
    title="Latin"
    img-src="/images/gallery/2020/4/6.webp"
    description="If you don't know Latin, your opinion doesn't count. I don't make the rules. Written in Czech."
>}}
</div>