<script>
    import { writable } from 'svelte/store'
    import Modal from 'svelte-simple-modal'
    import Popup from './Popup.svelte'
    const modal = writable(null)
    const showModal = () => modal.set(Popup)
</script>

<Modal show={$modal}>
    <svg
        on:click={showModal}
        width="50%"
        height="100"
        viewBox="0 0 100 103"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style="position: relative; "
    >
        <g filter="url(#filter0_d_182_289)">
            <path
                d="M86.3049 64.989C86.3049 64.989 86.3154 65.0614 86.3697 65.0536C89.4896 64.8049 92.5955 66.3698 94.1855 69.3189C95.249 71.3091 95.0384 74.1864 87.3701 78.3289L59.9997 93.108C55.9437 95.3039 54.0646 95.9643 51.9889 91.8286C51.0263 89.8977 50.9002 87.7532 51.472 85.8403C51.7566 84.8748 52.248 83.9348 52.8868 83.1214C52.9177 83.0799 52.8944 83.0463 52.8737 83.0308C43.7422 80.7676 19.6821 80.8151 8.43726 60.7796C0.698596 46.9832 13.9499 47.8731 12.5797 45.0401C3.51592 26.5556 21.696 28.5985 23.4352 23.0228C24.2074 20.5818 25.1139 13.463 30.78 10.4054C38.0896 6.46276 45.505 13.0598 47.8478 10.6315C62.7812 -4.76734 65.5539 12.0777 72.0296 13.0804C76.4304 13.7738 84.224 -0.331924 90.2122 23.2934C93.8185 37.4851 88.2931 58.7118 86.3049 64.989Z"
                fill="#B495C5"
            />
            <path
                d="M17.29 47.7404C21.3547 52.9929 30.9893 67.901 56.9842 76.1134"
                stroke="#D5BDDB"
                stroke-width="0.75"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M72.9659 19.4146C78.0041 38.6487 79.499 52.407 77.2365 67.8741"
                stroke="#D5BDDB"
                stroke-width="0.75"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M26.3467 31.0118C29.7281 36.8993 36.2296 53.1116 59.2665 69.4424"
                stroke="#D5BDDB"
                stroke-width="0.75"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M56.8379 16.8895C61.4112 24.3789 69.1985 43.8616 70.2216 63.9177"
                stroke="#D5BDDB"
                stroke-width="0.75"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M36.4961 19.7995C39.8776 25.687 49.5086 41.335 63.7301 65.2278"
                stroke="#D5BDDB"
                stroke-width="0.75"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </g>
        <defs>
            <filter
                id="filter0_d_182_289"
                x="1.99512"
                y="4.17392"
                width="96.6533"
                height="98.6744"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_182_289"
                />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_182_289"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
</Modal>

<svg
    width="50%"
    height="100"
    viewBox="0 0 105 106"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style="position: relative; left: -7vw;"
>
    <g filter="url(#filter0_d_182_271)">
        <path
            d="M85.944 87.6035L63.3081 80.4723C61.4463 79.8821 59.4129 80.251 57.8696 81.4559L39.1778 96.1118C35.2826 99.161 29.5992 96.4068 29.5502 91.4642L29.3297 67.6607C29.3297 65.6935 28.3253 63.8738 26.7084 62.7672L7.01223 49.4392C2.9211 46.6605 3.77852 40.39 8.4331 38.8162L30.922 31.2423C32.7839 30.6276 34.2047 29.103 34.7437 27.2341L41.3091 4.34046C42.6565 -0.430077 48.8789 -1.56123 51.8186 2.42241L65.9538 21.5537C67.1297 23.1275 68.9916 24.0374 70.9514 23.9636L94.6652 23.1275C99.5893 22.9554 102.578 28.5374 99.7118 32.5702L85.944 51.972C84.8171 53.5704 84.5232 55.636 85.2091 57.4803L93.3179 79.8575C95.0082 84.5051 90.6476 89.0789 85.944 87.6035Z"
            fill="#DE7A71"
        />
        <path
            d="M51.1824 41.3491L46.9688 7.63566"
            stroke="#F9BFB7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M61.9619 47.054L91.2857 30.0867"
            stroke="#F9BFB7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M61.7402 59.6198L63.6021 61.2427"
            stroke="#F9BFB7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M67.9375 65.0787L83.1751 78.4805"
            stroke="#F9BFB7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M85.3535 80.3986L87.1909 82.0215"
            stroke="#F9BFB7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M50.3494 60.4557L49.2715 62.6442"
            stroke="#F9BFB7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M46.7218 67.882L37.8291 86.1526"
            stroke="#F9BFB7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M36.5574 88.7838L35.4795 90.9724"
            stroke="#F9BFB7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M46.3559 50.6687L43.9551 50.1769"
            stroke="#F9BFB7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M38.272 49.0212L18.4043 44.9638"
            stroke="#F9BFB7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M15.5619 44.3982L13.1611 43.9064"
            stroke="#F9BFB7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M54.8335 53.6442C56.1729 53.6442 57.2588 52.5543 57.2588 51.2098C57.2588 49.8653 56.1729 48.7753 54.8335 48.7753C53.494 48.7753 52.4082 49.8653 52.4082 51.2098C52.4082 52.5543 53.494 53.6442 54.8335 53.6442Z"
            stroke="#F9BFB7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </g>
    <defs>
        <filter
            id="filter0_d_182_271"
            x="0.387695"
            y="0"
            width="104.442"
            height="105.389"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
        >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_182_271"
            />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_182_271"
                result="shape"
            />
        </filter>
    </defs>
</svg>
