create database gliterify;
create table categories (categories varchar(40), total_number int);
select * from categories;
insert into categories values("Ring", 10);
insert into categories values("Chains", 10);
insert into categories values("Earrings", 10);
insert into categories values("Bangles", 10);

create table rings(item_number int, item_name varchar(30), price int, images varchar(200));
select * from rings;
insert into rings values(01, "Sakura Gemstone", 230, "ring1(1).webp, ring1(2).webp, ring1(3).webp");
insert into rings values(02, "Glitter Miracle", 1430, "ring2(1).webp, ring2(2).webp, ring2(3).webp");
insert into rings values(03, "Fancy Dimond", 560, "ring3(1).webp, ring3(2).webp, ring3(3).webp");
insert into rings values(04, "Shinning Minimal", 1490, "ring4(1).webp, ring4(2).webp, ring4(3).webp");
insert into rings values(05, "Quard Miracle", 180, "ring5(1).avif, ring5(2).jfif, ring5(3).avif");
insert into rings values(06, "Infinity fore", 359, "ring6(1).avif, ring6(2).jfif, ring6(3).avif");
insert into rings values(07, "Classic dimand", 3780, "ring7(1).avif, ring7(2).jfif, ring7(3).avif");
insert into rings values(08, "Ally cluster", 478, "ring8(1).avif, ring8(2).jfif, ring8(3).avif");
insert into rings values(09, "SpringTime dimand", 1466, "ring9(1).avif, ring9(2).avif, ring9(3).avif");
insert into rings values(10, "Sparkle dimand", 980, "ring10(1).avif, ring10(2).jfif, ring10(3).avif");

select * from bangles;
delete from bangles;
create table bangles(item_number int, item_name varchar(30), price int, images varchar(300));
insert into bangles values(001, "Glinting Cover Bangle", 1340, "b1(1).avif, b1(2).avif, b1(3).avif");
insert into bangles values(002, "Blossom Mesh Bangle", 540, "b2(1).avif, b2(2).avif, b2(3).jfif");
insert into bangles values(003, "Millennia Dimond Bangle", 1200, "b3(1).avif, b3(2).avif, b3(3).avif");
insert into bangles values(004, "Bina Deep Dimond Bangle", 980, "b4(1).avif, b4(2).avif, b4(3).avif");
insert into bangles values(005, "Tanish Gitter Bangle", 1340, "b5(1).avif, b5(2).avif, b5(3).avif");
insert into bangles values(006, "Flexure Bangle", 780, "b6(1).avif, b6(2).jfif, b6(3).avif");
insert into bangles values(007, "Betel stone Bangle", 1100, "b7(1).avif, b7(2).avif, b7(3).avif");
insert into bangles values(008, "Sparkling drop Bangle", 640, "b8(1).avif, b8(2).avif, b8(3).avif");
insert into bangles values(009, "Flare twinkle Bangle", 1190, "b9(1).avif, b9(2).avif, b9(3).avif");
insert into bangles values(010, "Delicate floral Bangle", 740, "b10(1).avif, b10(2).avif, b10(3).avif");

alter table mybank.chains rename gliterify.chains;
alter table mybank.bangles rename gliterify.bangles;
alter table mybank.rings rename gliterify.rings;

select * from gliterify.chains;
delete from chains;
use gliterify;
create table chains(item_number int , item_name varchar(30), price int, images varchar(300));
insert into chains values(100, "Isla Glow Necklace", 461, "chain1(1).avif,chain1(2).avif, chain1(3).avif");
insert into chains values(101, "cluster dimond necklace", 1461, "chain2(1).avif , chain2(2).avif, chain2(3).avif");
insert into chains values(102, "Halo circlet Diamond Necklace", 981, "chain3(1).avif , chain3(2).avif, chain3(3).avif");
insert into chains values(103, "Aster clutter Diamond Necklace", 1234, "chain4(1).avif , chain4(2).avif, chain4(3).avif");
insert into chains values(104, "Harmony necklace",980, "chain5(1).avif , chain5(2).avif, chain5(3).avif");
insert into chains values(105, "Aleeza Bloom Diamond Necklace", 1457, "chain6(1).avif , chain6(2).avif, chain6(3).avif");
insert into chains values(106, "Jules Diamond Necklace", 270, "chain7(1).avif , chain7(2).avif, chain7(3).avif");
insert into chains values(107, "Serene Diamond Necklace", 1290, "chain8(1).jfif , chain8(2).avif, chain8(3).avif");
insert into chains values(108, "Glorious Floweret Necklace", 860, "chain9(1).avif , chain9(2).avif, chain9(3).avif");
insert into chains values(109, "Kiara Cutout Diamond Necklace", 340, "chain10(1).avif , chain10(2).avif, chain10(3).avif");
select * from earrings;
delete from earrings;
create table earrings(item_number int, item_name varchar(40), price int, images varchar(300));
insert into earrings values(110, "Ornate sparkle stud", 320, "e1(1).avif, e1(2).jfif, e1(3).jfif");
insert into earrings values(111, "Charm curves ", 1220, "e2(1).avif, e2(2).avif, e2(3).avif");
insert into earrings values(112, "Adhira clustere", 980, "e3(1).avif, e3(2).jfif, e3(3).avif");
insert into earrings values(113, "Startstruck diamond", 1290, "e4(1).avif, e4(2).avif, e4(3).avif");
insert into earrings values(114, "Carol seven", 1355, "e5(1).avif, e5(2).jfif, e5(3).jfif");
insert into earrings values(115, "Flair gemstone", 1890, "e6(1).avif, e6(2).avif, e6(3).jfif");
insert into earrings values(116, "Linear multi stone", 1190, "e7(1).avif, e7(2).avif, e7(3).avif");
insert into earrings values(117, "Elegent diamond stone", 990, "e8(1).jfif, e8(2).jfif, e8(3).jfif");
insert into earrings values(118, "Golden floret stud", 1435, "e9(1).avif, e9(2).avif, e9(3).jfif");
insert into earrings values(119, "Trista diamond", 1320, "e10(1).avif, e10(2).jfif, e10(3).avif");

