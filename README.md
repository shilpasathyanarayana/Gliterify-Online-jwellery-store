## To-Do
- ### Preparing for the Project
   - First ensure An IDE is installed
         - [Visual Studio Code](https://code.visualstudio.com)   <-----  the one I use
         - You can use any IDE available.

## Installation and setup Instruction
 - ### Ensure steps in [To-Do]  are completed.
 - ### Downloading the test project code
    - [x] Download the code from this repo Or make a clone of the project save it in your desktop
    - open the project in the IDE.
    - Click on the terminal and select new terminal for setting up the test project.

## Steps requried to install the frontEnd application
 - ### Installing the Packages required to run the project.
    - First make sure that npm and node installed globally on your machine. If you didn't installed then install using
      - ```install npm```
      - ```install nodeJs```
      - To install the packages i have used use the code
         - ```npm install```
         - it will install all the packages in the application

## Steps required to install the backend application
- I used NodeJs and express for the backend of the banking website
- Download the backend code from the git or clone it in your desktop
- open the code in IDE(visual studio code)
- install all the packages i have used using the code,
  - ```npm install```
- For the database I used Mysql   
- ### [To create the mysql database]:
    - Download mysql workbench software in your device.
    - open the workbench create one database gliterify.
         - use the query  ```create database gliterify```
     - In that database I created 7 tables named category, rings,bangles,chains,earrings,cart,orders

      - ### First table categort has the following information with 3 coloumns and 4 rows
           - use the query -  "create table category(category varchar(20) , total_number int, images varchar(200))"
             to create the table.
           - to insert the values to the table use the query - "insert into category(category,total_number,images) values(rings, 10,    r1. webp)"
           - use this query the number of times you want to insert the values[if you want 5 rows use this query 5 times   with 5 different values ]

               category	    total_number	        images
                rings	        10	                r1.webp
                chains	        10	                chains.jfif
                earrings	    10	                earrings.jpg
                bangles	        10	                b1.webp

      - ### second table rings has the following information with 5 coloumns and 10 rows

                item_number	   stock	        item_name	        price	    images
                    1	        16	        Sakura Gemstone	        230	        ring1(1).webp, ring1(2).webp, ring1(3).webp
                    2	        20	        Glitter Miracle	        1430	    ring2(1).webp, ring2(2).webp, ring2(3).webp
                    3	        20	        Fancy Dimond	        560	        ring3(1).webp, ring3(2).webp, ring3(3).webp
                    4	        20	        Shinning Minimal	    1490	    ring4(1).webp, ring4(2).webp, ring4(3).webp
                    5	        20	        Quard Miracle	        180	        ring5(1).avif, ring5(2).jfif, ring5(3).avif
                    6	        20	        Infinity fore	        359	        ring6(1).avif, ring6(2).jfif, ring6(3).avif
                    7	        20	        Classic dimand	        3780	    ring7(1).avif, ring7(2).jfif, ring7(3).avif
                    8	        20	        Ally cluster	        478	        ring8(1).avif, ring8(2).jfif, ring8(3).avif
                    9	        20	        SpringTime dimand	    1466	    ring9(1).avif, ring9(2).avif, ring9(3).avif
                   10	        20	        Sparkle dimand	        980	        ring10(1).avif, ring10(2).jfif, ring10(3).avif

      - ### third table chains has the following information with 5 coloumns and 10 rows

                 item_number	stock	        item_name	                 price	          images
                    100	        20	        Isla Glow Necklace	              461	   chain1(1).avif,chain1(2).avif, chain1(3).avif
                    101	        20	        cluster dimond necklace	          1461	   chain2(1).avif , chain2(2).avif, chain2(3).jfif
                    102	        20	        Halo circlet Diamond Necklace	  981	   chain3(1).avif , chain3(2).avif, chain3(3).avif
                    103	        20	        Aster clutter Diamond Necklace	  1234	   chain4(1).avif , chain4(2).avif, chain4(3).avif
                    104	        20	        Harmony necklace	              980	   chain5(1).avif , chain5(2).avif, chain5(3).avif
                    105	        20	        Aleeza Bloom Diamond Necklace	  1457	   chain6(1).avif , chain6(2).avif, chain6(3).avif
                    106	        20	        Jules Diamond Necklace	          270	   chain7(1).avif , chain7(2).avif, chain7(3).avif
                    107	        20	        Serene Diamond Necklace	          1290	   chain8(1).jfif , chain8(2).avif, chain8(3).avif
                    108	        20	        Glorious Floweret Necklace	      860	   chain9(1).avif , chain9(2).avif, chain9(3).avif
                    109	        20	        Kiara Cutout Diamond Necklace	  340	  chain10(1).avif ,chain10(2).avif,chain10(3).avif

      - ### forth table earrings has the following information with 5 coloumns and 10 rows

                item_number	    stock	            item_name	            price	        images
                    110	        12	            Ornate sparkle stud	        320	    e1(1).avif, e1(2).jfif, e1(3).jfif
                    111	        20	            Charm curves 	            1220	e2(1).avif, e2(2).avif, e2(3).avif
                    112	        20	            Adhira clustere	            980	    e3(1).avif, e3(2).jfif, e3(3).avif
                    113	        20	            Startstruck diamond	        1290	e4(1).avif, e4(2).avif, e4(3).avif
                    114	        20	            Carol seven	                1355	e5(1).avif, e5(2).jfif, e5(3).jfif
                    115	        20	            Flair gemstone	            1890	e6(1).avif, e6(2).avif, e6(3).jfif
                    116	        20	            Linear multi stone	        1190	e7(1).avif, e7(2).avif, e7(3).avif
                    117	        20	            Elegent diamond stone	    990	    e8(1).jfif, e8(2).jfif, e8(3).jfif
                    118	        20	            Golden floret stud	        1435	e9(1).avif, e9(2).avif, e9(3).jfif
                    119	        20	            Trista diamond	            1320	e10(1).avif, e10(2).jfif, e10(3).avif

      - ### fifth table bangles has the following information with 5 coloumns and 10 rows

                 item_number	stock	            item_name	            price	        images
                    1	        20	            Glinting Cover Bangle	    1340	    b1(1).avif, b1(2).avif, b1(3).avif
                    2	        20	            Blossom Mesh Bangle	        540	        b2(1).avif, b2(2).avif, b2(3).jfif
                    3	        20	            Millennia Dimond Bangle	    1200	    b3(1).avif, b3(2).avif, b3(3).avif
                    4	        20	            Bina Deep Dimond Bangle	    980	        b4(1).avif, b4(2).avif, b4(3).avif
                    5	        20	            Tanish Gitter Bangle	    1340	    b5(1).avif, b5(2).avif, b5(3).avif
                    6	        20	            Flexure Bangle	            780	        b6(1).avif, b6(2).jfif, b6(3).avif
                    7	        20	            Betel stone Bangle	        1100	    b7(1).avif, b7(2).avif, b7(3).avif
                    8	        20	            Sparkling drop Bangle	    640	        b8(1).avif, b8(2).avif, b8(3).avif
                    9	        20	            Flare twinkle Bangle	    1190	    b9(1).avif, b9(2).avif, b9(3).avif
                   10	        20	            Delicate floral Bangle	    740	        b10(1).avif, b10(2).avif, b10(3).avif

       - ### sixth table cart has the following information with 6 coloumns and as many number of rows equal to the items added to  the cart. the rows gets added as we put the items in the cart from the frontend website.
           - date is the date when user adds the items to the cart and order_id is given to the customer when the order is placed


                 item_number	    category	    total_number	        price	    date	        order_id


       - ### seventh table orders has the following information with 3 coloumns

                    order_id	        date	        totalAmount
