<script context="module">
    import { navigatePotrait } from './SpeakerPortrait.svelte'

    let summaries = [
        `Deanna Meador is the Deputy Director at the Wond’ry, Vanderbilt University’s Innovation Center
and the CEO of fashion technology company Couture Technologies. 
She began Couture Technologies, alongside her cofounder Dr. Marcelino Rodriguez-Cancio, to 
empower direct-to-consumer fashion and workwear apparel brands with virtual try on 
technology, 3D garment creation services, and enhanced data analytics designed to reduce 
returns and increase conversion rates. Couture Technologies is a National Science Foundation 
funded company that was recognized as one of the Top 9 tech startups in the world during the 
2021 Olympics of Tech and the 2022 Most Innovative Apparel Sales Software Company.
Deanna is a successful tech entrepreneur and inventor that describes herself as never meeting 
a challenge she didn’t like. Her love of problem solving and the ability to develop solutions that 
impact the lives of people has driven each of her business ventures. She started her first 
company during graduate school and grew it to multiple physical locations in 2 states until it was
acquired by a larger company. After selling this company, she spent 7 years conducting 
rigorous education and juvenile justice research for Vanderbilt’s Peabody Research Institute 
(PRI). During her time at PRI, she was the resident innovator and developed a paperless data 
collection system for collecting assessment and observational data in the field. This system has 
been featured in multiple articles and colloquia, including the Institute of Education Science’s 
showcase entitled, “Using Technology in Research”, and was adopted by universities across the
U.S., South Africa, Portugal, Australia and Sweden. In 2017, she joined 3 other inventors to 
develop Chalk Coaching, a tool for improving classroom experiences for preschool children 
through observation and data-driven coaching. The development of Chalk was funded by the 
National Science Foundation. 
Deanna is the recipient of the Unsung Hero award for her work with underserved youth, as well 
as the Young Alumni Achievement Award from her undergraduate university for her innovations 
(the highest honor the university bestows on alumni under the age of 40, out of over 400 
nominees). 
Over the last 5 years, she has taught over 15 cohorts of aspiring entrepreneurs and mentored 
over 400 teams as they evaluated new technologies and launched new ventures. Deanna really 
enjoys working with creators, inventors, and entrepreneurs that dedicate their lives and talents 
to making a positive impact in the world`,
        `Jonathan Sprinkle is a Professor of Computer Science at Vanderbilt University since 2021. Prior to joining Vanderbilt he was the Litton Industries John M. Leonis Distinguished Associate Professor of Electrical and Computer Engineering at the University of Arizona, and the Interim Director of the Transportation Research Institute. In 2020 he was named a Distinguished Scholar of the University of Arizona. From 2017-2019 he served as a Program Director in Cyber-Physical Systems and Smart & Connected Communities at the National Science Foundation in the CISE Directorate. In 2013 he received the NSF CAREER award, and in 2009, he received the UA's Ed and Joan Biggers Faculty Support Grant for work in autonomous systems. His work has an emphasis for industry impact, and he was recognized with the UA "Catapult Award" by Tech Launch Arizona in 2014, and in 2012 his team won the NSF I-Corps Best Team award. His research interests and experience are in model-based approaches to cyber-physical systems, and he teaches courses ranging from systems modeling and control to mobile application development and software engineering.`,
        // 'TBD',
        // 'TBD',
    ]
    export let slideNumber = 0
    let slideMax = 2

    function navigateSummary(isForward) {
        if (isForward) {
            slideNumber = (slideNumber + 1) % slideMax
        } else {
            slideNumber = (slideNumber - 1 + slideMax) % slideMax
        }
        document.getElementById('summary').innerHTML = summaries[slideNumber]
        navigatePotrait(isForward)
    }
</script>

<div class="flex flex-row w-fit md:w-[50vw] mx-auto">
    <button
        class="relative mr-5 rotate-180"
        on:click={() => navigateSummary(false)}
    >
        <svg
            z-index="20"
            width="29"
            height="51"
            viewBox="0 0 29 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3 48L26 25.5L3 3"
                stroke="white"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    </button>
    <div
        class="relative h-[50vh] lg:h-[60vh] bg-opacity-40 bg-white w-[70vw] md:w-[60vw] lg:w-[45vw] rounded-lg"
    >
        <div
            class="font-['Futura'] text-justify overflow-scroll h-full w-full px-3 md:px-6 lg:px-10 py-5 text-sm md:text-md lg:text-lg xl:text-xl"
            id="summary"
        >
            {summaries[0]}
        </div>
    </div>
    <button class="relative ml-5" on:click={() => navigateSummary(true)}>
        <svg
            z-index="20"
            width="29"
            height="51"
            viewBox="0 0 29 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3 48L26 25.5L3 3"
                stroke="white"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    </button>
</div>

<style>
    #summary::-webkit-scrollbar {
        width: 10px;
    }
    #summary::-webkit-scrollbar * {
        background: transparent;
        border-radius: 10px;
    }
    #summary::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: rgba(255, 0, 0, 0.1) !important;
    }
</style>
