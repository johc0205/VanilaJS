const quotes = [
    {
        quote : "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다 - ",
        author : "엘버트 허버드",
    },
    {
        quote : "산다는것 그것은 치열한 전투이다. - ",
        author : "로망로랑",
    },
    {
        quote : "피할수 없으면 즐겨라 - ",
        author : "로버트 엘리엇",
    },
    {
        quote : "한번의 실패와 영원한 실패를 혼동하지 마라 - ",
        author : "F.스콧 핏제랄드",
    },
    {
        quote : "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다 - ",
        author : "단테",
    },
    {
        quote : "평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라. - ",
        author : "제임스 딘",
    },
    {
        quote : "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다 - ",
        author : "괴테",
    },
    {
        quote : "만약 우리가 할 수 있는 일을 모두 한다면 우리들은 우리자신에 깜짝 놀랄 것이다. - ",
        author : "에디슨",
    },{
        quote : "성공해서 만족하는 것은 아니다. 만족하고 있었기 때문에 성공한 것이다 - ",
        author : "알랭",
    }
    ,{
        quote : "자신의 본성이 어떤것이든 그에 충실하라 . 자신이 가진 재능의 끈을 놓아 버리지 마라. 본성이 이끄는 대로 따르면 성공할것이다 - ",
        author : "시드니 스미스",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;