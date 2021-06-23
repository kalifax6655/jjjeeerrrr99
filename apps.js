

const quotes = [
{
	quote: 'img/wallet1.jpg',
	author: '1NFcATCaWyPoSQLeXmwU1HvKThv9i4paTN',
    ordernum: 'Order #34A4WX8394'
},
    
{
	quote: 'img/wallet2.jpg',
	author: '116DG5FYTKdyAY8N5ySP3zNfYH2zyDVmP2',
    ordernum: 'Order #56H5AK1788'
},
    
{
	quote: 'img/wallet3.jpg',
	author: '17TuVcqNZcFUXgpVSQ8cyaoiyB54qXATKG',
    ordernum: 'Order #76J5BH9327'
},	
	
{
	quote: 'img/wallet4.jpg',
	author: '1F4DZbGsoTv8ugfs9Pg1rMQgkknt219Q64',
    ordernum: 'Order #89U3JI6382'
},	
	
{
	quote: 'img/wallet5.jpg',
	author: '1LxgdcDMEVrf4pNeeUjyVYBmbKgT7rz5wE',
    ordernum: 'Order #12Q4KL4366'
},	
	
{
	quote: 'img/wallet6.jpg',
	author: '1FEmt8Kan4LrHQ9rJdasF1u13FL3AhMsi5',
    ordernum: 'Order #65E5YU0326'
},	

{
	quote: 'img/wallet7.jpg',
	author: '17aEMbcSSfHskqeKuazqCCxYmsMdTUB41U',
    ordernum: 'Order #95W5ER7322'
},	
	
{
	quote: 'img/wallet8.jpg',
	author: '1AsxFkgYmD6h7Qk1d54jLzwNhjo3srfKmN',
    ordernum: 'Order #34D5EE7206'
},	
	
{
	quote: 'img/wallet9.jpg',
	author: '1FKYvJfwrJsv86FTnyocTMY7vzG44sQsoX',
    ordernum: 'Order #68X5EK1104'
},	
	
{
	quote: 'img/wallet10.jpg',
	author: '12yCBYpVFDQ5vg6V5VpR4tfBSPAZ1iuhBP',
    ordernum: 'Order #34Z5QA9026'
},	
	
{
	quote: 'img/wallet11.jpg',
	author: '15dGTTg97EeMeJUu8avrko8FHF6ZP2wyvv',
    ordernum: 'Order #89J6DD8320'
},	

{
	quote: 'img/wallet12.jpg',
	author: '18LZUhMpfMqNq55zHR4dPUE7DCBsaWhYxu',
    ordernum: 'Order #13X6FS5212'
},	
	
{
	quote: 'img/wallet13.jpg',
	author: '1ArvUWM64aX459sfwUwz7eMcAmapD68Ja9',
    ordernum: 'Order #94L7QA0633'
},	
	
{
	quote: 'img/wallet14.jpg',
	author: '1FCr4VmJAcHmKAuAAF4t7wEhpWyXoXoD2i',
    ordernum: 'Order #32U3MN7214'
},	
	
{
	quote: 'img/wallet15.jpg',
	author: '1wMkSDZiKfk2RfC1qQq8ty5t4Xinopu5z',
    ordernum: 'Order #86G6VV0932'
},	
	
{
	quote: 'img/wallet16.jpg',
	author: '1Eaa89ZDoZDifa4wHLiW4FQgZLXbngDLm8',
    ordernum: 'Order #21H6QH0433'
},	

{
	quote: 'img/wallet17.jpg',
	author: '1PdGSeL2vWLwapaitESRHgbR6MBvxtwFgW',
    ordernum: 'Order #99C6DH0498'
},	

{
	quote: 'img/wallet18.jpg',
	author: '19zWtLw8xFo1teMS5YVSzSKKYPoRQKrkot',
    ordernum: 'Order #11B7LP1954'
},	
	
	
]

const quoteBtn = document.getElementById('quote-btn');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const ordernum = document.querySelector('.ordernum');

function bitcoinqr() {
	let random = Math.floor(Math.random() * quotes.length);
	
	quote.getElementsByTagName("IMG")[0].src = quotes[random].quote;
	author.innerHTML = quotes[random].author;
    ordernum.innerHTML = quotes[random].ordernum;
}