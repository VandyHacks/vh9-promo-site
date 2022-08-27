<!-- Fishes -->
<div class="absolute pointer-events-none top-[200vh] w-full h-[500vh]">
    <div class="swim-left-container">
        <img
            class="absolute top-[20vh] h-[40px] sm:h-[80px] md:h-[120px] animate_fish right-0"
            src="./png/fish1.png"
            alt="fish"
        />
    </div>
    <div class="swim-right-container">
        <img
            class="absolute top-[80vh] h-[60px] sm:h-[100px] md:h-[140px] animate_fish"
            src="./png/fish2.png"
            alt="fish"
        />
    </div>
    <div class="swim-top-right-container">
        <img
            class="absolute top-[120vh] h-[40px] sm:h-[80px] md:h-[120px] animate_big_fish opacity-90"
            src="./png/octopus.png"
            alt="octopus"
        />
    </div>
    <div class="swim-left-container">
        <img
            class="absolute top-[210vh] h-[40px] sm:h-[80px] md:h-[120px] animate_fish right-0"
            src="./png/fish3.png"
            alt="fish"
        />
    </div>
    <div class="swim-right-container">
        <img
            class="absolute top-[300vh] h-[30px] sm:h-[70px] md:h-[110px] animate_fish opacity-70"
            src="./png/fish4.png"
            alt="fish"
        />
    </div>
    <div class="swim-top-left-container">
        <img
            class="absolute top-[390vh] h-[40px] sm:h-[80px] md:h-[120px] right-0 animate_big_fish opacity-20"
            src="./png/squid.png"
            alt="squid"
        />
    </div>
    <div class="shark-container">
        <img
            class="absolute top-[420vh] h-[100px] sm:h-[140px] md:h-[180px] opacity-20"
            src="./png/shark.png"
            alt="shark"
        />
    </div>
</div>

<style>
    @keyframes upDown {
        to {
            transform: translatey(30px);
        }
    }

    @keyframes upDownRotate {
        to {
            transform: translatey(30px) rotate(15deg);
        }
    }

    @keyframes swimLeft {
        to {
            transform: translatex(-100%);
        }
    }

    @keyframes swimRight {
        to {
            transform: translatex(100%);
        }
    }

    @keyframes swimTopRight {
        to {
            transform: translatey(-400px) translatex(100%);
        }
    }

    @keyframes swimTopLeft {
        to {
            transform: translatey(-200px) translatex(-100%);
        }
    }

    .swim-left-container {
        animation: swimLeft 19s infinite linear;
    }

    .swim-right-container {
        animation: swimRight 17s infinite linear;
    }

    .shark-container {
        animation: swimRight 42s infinite linear;
    }

    .swim-top-right-container {
        animation: swimTopRight 28s infinite linear;
    }

    .swim-top-left-container {
        animation: swimTopLeft 33s infinite linear;
    }

    .animate_fish {
        animation: upDown 2s alternate infinite ease-in-out;
    }

    .animate_big_fish {
        animation: upDownRotate 2s alternate infinite ease-in-out;
    }
</style>
