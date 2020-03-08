import Swal from 'sweetalert2';

export const popQuiz = quizzes => Swal.mixin({
    input: 'text',
    confirmButtonText: 'Next &rarr;',
    progressSteps: quizzes.map((q, i) => `${i}`),
}).queue([
    {
        title: 'Daily Quiz!',
        html:
            'You have accepted our daily quiz challenge!' +
            '<br>Let\'s get started😉' +
            '<h3>How are you feeling today?</h3>',
    },
    ...quizzes.map((q, i) => (
        {
            title: `Question ${i + 1}: True or False?`,
            text: q.Q,
        }
    )),
]).then((result) => {
    if (result.value) {
        const points = quizzes.filter((q, i) => q.A === result.value[i + 1].charAt(0).toUpperCase()).length;
        Swal.fire({
            title: `Congratulations!`,
            html: `
            You\'ve earned ${points} points today!
            <br><h3>We\'ll see you tomorrow💪</h3>`,
            confirmButtonText: 'Lovely!'
        });
    }
});
