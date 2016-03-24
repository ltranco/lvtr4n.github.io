var quotes = ["\"Musicians play their instruments. I play the orchestra.\" - <a target='blank' href='http://www.wsj.com/articles/apple-co-founders-allies-take-aim-at-hollywood-over-steve-jobs-1444000308'>The 'opportunistic Steve Jobs movie'</a>",
            "\"It doesn't matter if the glass is half empty or half full; all that matters is you're the one pouring the water.\" - Mark Cuban"];
var index = 0;

function changeQuote() {
    if(index == quotes.length) {
        index = 0;
    }
    $("#quotes").html(quotes[index++]);
}

function emailSampleHandler() {
    input_email = $(".freelance-proj-email-field").val();
    if(input_email) {
        email = {"email":input_email};
        $(".freelance-proj-email-button").val("Sent!");
        $(".freelance-proj-email-field").val("");
        $.ajax({
            url:"https://skurt-esender.herokuapp.com/send/",
            type: "GET",
            crossDomain: true,
            data: email,
            success: function(data) {
                $(".freelance-proj-email-button").val("Get Sample");
            },
            error: function(data) {
                $(".freelance-proj-email-button").val("Get Sample");
            }
        });
    }
}

$(document).ready(function() { 
    var dur = 300;
    setInterval(function() {
        $(".down-here").effect("bounce", 1000)
    }, 3000);
    $(".down-here").click(function() {
        $("html,body").animate({
          scrollTop: $(".concept-statement").offset().top + 100
        }, dur);
    });
    
    $("h1").animate({color:"#ffffff"}, dur);
    $("h3").animate({color:"#ffffff"}, dur);
    $("header").animate({backgroundColor:"#131314"}, 0);
    $('.concept-statement').waypoint(function(direction) {
        if (direction == "up") {
            $("h1").animate({color:"#ffffff"}, {duration:dur, queue:false});
            $("body").animate({ backgroundColor: "#131314" }, {duration:dur, queue:false});
            $("h3").animate({color:"#ffffff"}, {duration:dur, queue:false});
            $("header").animate({backgroundColor:"#131314"}, {duration:dur, queue:false});
        }
        else if (direction == "down") {
            $("h1").animate({color:"#131314"}, {duration:dur, queue:false});
            $("body").animate({ backgroundColor: "#ffffff" }, {duration:dur, queue:false});
            $("h3").animate({color:"#131314"}, {duration:dur, queue:false});
            $("header").animate({backgroundColor:"#ffffff"}, {duration:dur, queue:false});
        }
    },
    {
        offset: function() {
            return 0;
        }
    });

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $("#kickass").hide();
    }

    $(".freelance-proj-email-button").click(function() {
        emailSampleHandler();
    });
    $(".freelance-proj-email-field").keydown(function(e) {
        if(e.keyCode == 13){
            emailSampleHandler();
        }
    });

    setInterval(changeQuote, 10000);
});

$(window).load(function() {
    var books = $("#reading-list");
    books.append("<div class=\"book\"><img class=\"\" src=\"img/books/long_tran_apple_knight.jpg\"/><h5>The Power of Negative Thinking</h5><h6>Bob Knight and Bob Hammel</h6><p>I've always admired Bob Knight as one of the greatest NCAA basketball coaches. His unorthodox coaching techniques, as described in his book, are actually very applicable to a lot of aspects in my everyday life: writing software, planning the week, or packing for a trip. His philosophy could be summed up as <b>\"being alert to the possible negatives in any situation is the best way to bring out positive results.\"</b> He argues against illusory superiority (the tendency to overestimate one's qualities over those of others) and points out that solid preparation trumps all estimation. In Knight's world, the team that makes less mistakes will always be the winner and the only way to achieve that is through constant practice and preparation. This piece reminds me that tomorrow won't always be better unless I thoroughly prepare for the worst today.</p></div>");
    books.append("<div class=\"book\"><img class=\"\" src=\"img/books/long_tran_apple_levitt.jpg\"/><h5>Freakonomics</h5><h6>Steven Levitt and  Stephen Dubner</h6><p>Currently reading this piece!</p></div>");
    books.append("<div class=\"book\"><img class=\"\" src=\"img/books/long_tran_apple_fisher.jpg\"/><h5>Getting to Yes</h5><h6>Roger Fisher and William Ury</h6><p>I have always thought of negotiation as a battle of will in which the more stubborn party will eventually force the other side to give in. According to Roger Fisher and William Ury, this approach of negotiation, called positional negotiation, does not yield the optimal outcomes for either party and may even damage the relationship in some cases. Fisher and Ury introduced the concept of principled negotiation, an merit-based approach aimed to protect both parties' interests without having to give in to pressures and deceptive attacks. Principled negotiation separated the people from the problems, focused solely on the parties' interests, attempted to create more options, and made final decisions based on some standard criteria. I realize that I have already been loosely practicing principled negotiation, but this book really helps me organize my thoughts into a comprehensive layout for future usage.</p></div>");
    books.append("<div class=\"book\"><img class=\"\" src=\"img/books/long_tran_apple_greenfield.png\"/><h5>Two Scoops of Django</h5><h6>Daniel Roy Greenfield and Audrey Roy Greenfield</h6><p>I've been using Django on a few projects and have got an amateur understanding of the framework. One of my mentors recommended this reference book and it has made me very aware of the design patterns and good practices for huge Django projects. The Greenfields have made this reference book a fun reading experience. I really enjoyed studying numerous code comparisons between good and bad practices, along with the rationale behind each decision. In the near future, I expect to be working on more involved Django projects and hope that the lessons learned from this book will come in handy.</p></div>");
    books.append("<div class=\"book\"><img class=\"\" src=\"img/books/long_tran_apple_oleary.jpg\"/><h5>Cold Hard Truth On Men, Women, and Money</h5><h6>Kevin O'Leary</h6><p>When I first started watching <i>Shark Tank</i>, I wasn't very fond of Kevin \"Mr. Wonderful\" O'Leary because of his blunt comments and seemingly heartless attitude. But then I realized when we took the emotions and the people out of the equation and solely focused on the numbers, O'Leary's comments made a lot of sense. His book has taught me how to be extremely disciplined when it comes to personal finance at different stages in life and how to swallow the cold, hard truth about money that a lot of people choose to ignore. O'Leary's advice on money is easy to understand, but very hard to master and maintain. After all, it's pretty hard to imagine the first thing a newly-wed couple need to do, according to O'Leary, is to draft a prenup...</p></div>");
    books.append("<div class=\"book\"><img class=\"\" src=\"img/books/long_tran_apple_lowe.jpg\"/><h5>Warren Buffet Speaks</h5><h6>Janet Lowe</h6><p>When I saw \"Warren Buffet\" in the title, my mind was sparked with enthusiasm, only to find out that this piece wasn't really about the Buffettology investing techniques that I was hoping to learn. Instead, it was a collection of very witty and inspirational quotes and stories from the Oracle of Omaha himself. Although not one of my favorite reads, the book did bring some good quotes. My favorite: <b>\"Investing in yourself is the best thing you can do. Anything that improves your own talents; nobody can tax it or take it away from you\"</b>.</p></div>");
    books.append("<div class=\"book\"><img class=\"\" src=\"img/books/long_tran_apple_sinek.jpg\"/><h5>Start with Why</h5><h6>Simon Sinek</h6><p>I first learned about Simon Sinek through his <a href=\"https://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action\" target=\"blank\">TED talk</a>. Through his concept of \"The Golden Circle\", Sinek explained the reason why organizations and leaders like <i class=\"fa fa-apple\"></i> Apple Inc, Martin Luther King Jr., and the Wright brothers were so influential: they all start with WHY. Every business or organization know WHAT they do. Some know HOW they do it. Very few are able to articulate WHY they do what they do. My favorite quote from this piece would have to be <b>\"People don't buy what you do; they buy why you do it.\"</b> Sinek supported this theory by showing how the Golden Circle aligned perfectly with a cross section of the human brain. The inner-most part of our brains, the limbic brain (responsible for emotions and decisions making but incapable of language or analysis), corresponds perfectly to the WHY component in the Golden Circle. Sinek's book reminds me that money and fame are always byproducts of WHY. When I clearly articulate why I do what I do, I will have what it takes to lead and inspire others.</p></div>");
    books.append("<div class=\"book\"><img class=\"\" src=\"img/books/long_tran_apple_buffet.jpg\"/><h5>Warren Buffet and the Interpretation of the Financial Statements</h5><h6>Mary Buffet and David Clark</h6><p>I read this book when I was taking an accounting class at UCSD. Although I wasn't a big fan of how this book was written, I learned a lot about accounting. The book was similar to an easy-to-read glossary of accounting terms. It outlined how Warren Buffet looked for particular metrics on companies' financial statements to value their stock prices and evaluate their \"durable competitive advantage\". I didn't take the book to heart and apply these concepts to investing in the stock market, but it definitely helped me understand financial statements on Yahoo! Finance.</p></div>");
    books.append("<div class=\"book\"><img class=\"\" src=\"img/books/long_tran_apple_cuban.jpg\"/><h5>How to Win at the Sport of Business</h5><h6>Mark Cuban</h6><p>Mark Cuban has always been my favorite Shark ever since he first appeared on Season 3 of <i>Shark Tank</i>. I admire the fact that he's a very intelligent guy who cares less about what other people have to say about him and more about his businesses. I bought his \"book\", or rather a compilation of his edited blog posts, at an airport and it was probably the best $5 I've spent. Cuban's stories of rags to riches were very inspirational and witty. I especially like his advice on \"finding the path of least resistance\", a simple concept to validate the best solution to a problem.</p></div>");
    
    var owl = $("#reading-list");
    owl.owlCarousel({
      navigation : true,
      pagination: true,
      singleItem:true,
      lazyLoad: true,
      lazyFollow: true,
    });
});