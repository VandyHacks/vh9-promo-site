<script context="module">
    let summaries = [
        "Entrepreneur and Investor <br /> <br /> Jeff Rothschild was co-founder of the storage software company Veritas Software and the online gaming company Mpath Interactive. Jeff joined Facebook in 2005 as VP Infrastructure Enginereering and spent 10 years focused on scalability, availability, and performance. Since leaving Facebook in 2015, Jeff has been working as an investor and mentor to entrepreneurs and is on the board of Pure Storage. Jeff also serves as Vice-Chair of the Board of Trust of Vanderbilt University, where he had earned his BA in Psychology and MS in Computer Science. Jeff's philanthropic and impact investing activities include educational projects supporting disadvantaged students, a shoe company in Guatemala, an ophthalmologic hospital providing restorative eye surgery in western Kenya, and farmers cooperatives and credit unions, also in Kenya.",
        'summary 2',
        'summary 3',
        'summary 4',
    ]
    export let slideNumber = 0
    let slideMax = 3

    export function showSlide(x) {
        if (slideNumber != x) {
            slideNumber = x
        }
        document.getElementById('summary').innerHTML = summaries[slideNumber]
    }

    export function getSlideNumber() {
        return slideNumber
    }

    function navigate(isForward) {
        if (isForward) {
            if (slideNumber == slideMax) {
                slideNumber = 0
            } else {
                slideNumber++
            }
        } else {
            if (slideNumber == 0) {
                slideNumber = slideMax
            } else {
                slideNumber--
            }
        }
        document.getElementById('summary').innerHTML = summaries[slideNumber]
    }
</script>

<div class="flex flex-row w-fit md:w-[50vw] mx-auto">
    <button class="relative mr-5 rotate-180" on:click={() => navigate(false)}>
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
            Entrepreneur and Investor <br /> <br /> Jeff Rothschild was co-founder
            of the storage software company Veritas Software and the online gaming
            company Mpath Interactive. Jeff joined Facebook in 2005 as VP Infrastructure
            Enginereering and spent 10 years focused on scalability, availability,
            and performance. Since leaving Facebook in 2015, Jeff has been working
            as an investor and mentor to entrepreneurs and is on the board of Pure
            Storage. Jeff also serves as Vice-Chair of the Board of Trust of Vanderbilt
            University, where he had earned his BA in Psychology and MS in Computer
            Science. Jeff's philanthropic and impact investing activities include
            educational projects supporting disadvantaged students, a shoe company
            in Guatemala, an ophthalmologic hospital providing restorative eye surgery
            in western Kenya, and farmers cooperatives and credit unions, also in
            Kenya.
        </div>
    </div>
    <button class="relative ml-5" on:click={() => navigate(true)}>
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
