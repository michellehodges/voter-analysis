// Were there more male or female voters in Greensboro?
// ANSWER: There are 404 females and 396 males, so there are more female than male voters in Greensboro.
// QUERY:
select * from cities where name = 'Greensboro';
select count(*) from votes where "cityId" = 68 and votes.gender = 'male';
select count(*) from votes where "cityId" = 68 and votes.gender = 'female';

// What is the average age of voters in Orlando?
// ANSWER: The average age is  51.4562500000000000.
// QUERY:
select * from cities where name = 'Orlando';
select avg(age) from votes where votes."cityId" = 77 ;

// Which state has the most cities listed?
// ANSWER: stateId 3 has the most cities listed, which is California.
// QUERY:
select count("stateId"), "stateId" from cities group by "stateId" order by "stateId" desc;

// Which state had the most votes placed?
// ANSWER: California, state #3
// QUERY:
select count("stateId"), "stateId" from votes inner join cities on (votes."cityId" = cities.id)
group by "stateId" order by count("stateId") desc;

// What percentage of cities passed the minimum wage issue (> 50% of votes)?
// ANSWER: 6.2% of cities voted to pass the minimum wage issue.
// QUERY:
select count(in_favor), cities.name from cities join votes on cities.id = votes."cityId" where in_favor = 't' group by cities.name having count(in_favor) > 500;
select count(*) from cities;

// How many of the issues were approved in each of the following cities? An issue is 'approved' if it got more than 50% of the votes.
// Dallas, Atlanta, Anaheim, Boston
// ANSWER: I give up :(
// QUERY:
select "issueId", "cityId" from votes where in_favor = 't' group by "cityId" having count(in_favor) > 400;
select count(*) from issues;

// Do you see any signs of election fraud (the same person voting for the same issue more than once)?
// ANSWER: Yes, there are many signs of election fraud.
// QUERY:
select count(jumbled_user_id), jumbled_user_id from votes group by jumbled_user_id order by count(jumbled_user_id) desc;
