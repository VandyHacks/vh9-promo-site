<script>
    import DiveDeeper from '../components/DiveDeeper.svelte'
    import FaqItem from '../components/FaqItem.svelte'
</script>

<div class="relative text-white flex flex-col h-screen w-screen">
    <div class="m-auto z-[1]">
        <div class="text-2xl md:text-4xl lg:text-6xl">FAQ</div>
        <div
            class="mt-4 pt-2 h-[70vh] sm:h-[65vh] bg-opacity-40 bg-white w-[80vw] mx-auto justify-center border-0 rounded-lg"
        >
            <div
                id="scrollable-content"
                class="m-5 h-[58vh] sm:h-[55vh] overflow-scroll font-inter overflow-x-hidden"
            >
                <ul class="flex flex-col items-left text-left pl-3 md:pl-10">
                    <FaqItem
                        question="What is a hackathon?"
                        answer="Hackathons are events where students across the country come together for a weekend of innovation and creativity. Participants at VandyHacks have 36 hours to create anything that shows off their creativity and passion! You may choose any platform, programming language, or format to show off to our judges - you can even present a storyboard or an idea! At VandyHacks, there's no end to the possibilities."
                    />
                    <FaqItem
                        question="How do I register?"
                        answer="When applications are open, you will be able to sign in to apply.vandyhacks.org, or click our application button. You'll be able to check the status of your application on the registration portal as well."
                    />
                    <FaqItem
                        question="When is the registration deadline?"
                        answer="Registration for non-Vanderbilt students closes on October 7th, while registration for Vanderbilt students closes on October 16th. However, some benefits (like travel reimbursement) have earlier deadlines, so we encourage you to apply early!"
                    />
                    <FaqItem
                        question="What if I've never been to a hackathon?"
                        answer="Not to worry! A few days before the event, you'll receive an email with a link to our hacker guide, which will contain all the information you need. During the event, our team will be available to answer any questions. As always, feel free to email us at info@vandyhacks.org if you have any questions!"
                    />
                    <FaqItem
                        question="What is the COVID-19 Policy?"
                        answer="VandyHacks is adhering to all Vanderbilt University policies. You can find more information about those policies <a style='color: #335dd6;' target='_blank' href='https://www.vanderbilt.edu/healthwellness/public-health/covid19/'>here</a>."
                    />
                    <FaqItem
                        question="What should I bring?"
                        answer="A device you can write code on, and any chargers you might need on-site! If you are traveling from outside of Vanderbilt, bring any supplies you would use on a two-night trip!"
                    />
                    <FaqItem
                        question="How are teams formed? Do I need a team?"
                        answer="We'll provide an in-person event specifically geared towards team formation! There's also plenty of opportunity to meet people and chat about interests organically at the start of the event. However, teams are not required - feel free to work individually!"
                    />
                    <FaqItem
                        question="Will there be other activities besides hacking?"
                        answer="Yes! Our committees have been working hard on creating the best workshops, sponsor networking events, mini-events where you can meet other hackers, and so much more! Our full schedule will be live soon."
                    />
                    <FaqItem
                        question="Can I submit older projects?"
                        answer="We require that all submissions be projects that were started, made during, and presented uniquely for  VandyHacks IX."
                    />
                    <FaqItem
                        question="Can I participate in-person? How about virtually?"
                        answer="VandyHacks is open to in-person hackers only. We are providing travel reimbursement on a distance-based tier system, and are so excited to see you all in-person this year!"
                    />
                    <FaqItem
                        question="Where is the event? How can I get there?"
                        answer="VandyHacks will be held in the Engineering and Science Building at Vanderbilt University. Hackers commuting to Vanderbilt via car will have access to parking. Vanderbilt is also close to public transportation, and the Nashville airport."
                    />
                    <FaqItem
                        question="Is there travel reimbursement? How do I apply?"
                        answer="Hackers need to express interest in travel reimbursement on the VandyHacks application. An additional form will be sent to determine distance, eligibility, and logistics. Restrictions apply! Hackers who complete the form after October 1st will be ineligible for reimbursement"
                    />
                    <FaqItem
                        question="Where can I find the Discord invite?"
                        answer="Once we've approved your application, you'll receive all of the details you need on joining the Discord server!"
                    />
                    <FaqItem
                        question="Who can apply?"
                        answer="Anyone who is 18 or older and currently enrolled in a college or university with a valid student ID."
                    />
                    <FaqItem
                        question="Is the event free?"
                        answer="VandyHacks is completely free to participants thanks to our corporate sponsors once you arrive on-site! This includes lodging, food, and swag."
                    />
                    <FaqItem
                        question="Am I eligible to win a prize?"
                        answer="Teams of up to 4 individuals who submit a project are eligible to win a prize. Any attendee is eligible to win, but in order to receive a prize, at least one team member must hold unrestricted work authorization in the United States."
                    />
                    <FaqItem
                        question="What if I am interested in being a mentor or a judge?"
                        answer="Email us at info@vandyhacks.org"
                    />
                    <FaqItem
                        question="I have more questions!"
                        answer="Email us at info@vandyhacks.org"
                    />
                </ul>
            </div>
        </div>
    </div>
    <DiveDeeper currentPage="faq" />
</div>

<style>
    #scrollable-content::-webkit-scrollbar {
        width: 10px;
    }
    #scrollable-content::-webkit-scrollbar * {
        background: transparent;
        border-radius: 10px;
    }
    #scrollable-content::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: rgba(255, 0, 0, 0.1) !important;
    }
</style>
