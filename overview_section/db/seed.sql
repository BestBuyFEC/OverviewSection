TRUNCATE product_description RESTART IDENTITY CASCADE;
TRUNCATE product_features RESTART IDENTITY CASCADE;

INSERT INTO product_description (name, description_body, sku) 
VALUES (
'LEGO - Super Mario Nintendo Entertainment System 71374',
'Do you love video games? Did you play Super Mario Bros.™ back in the day? Or do you just enjoy a hands-on, creative activity in your spare time? If so, this nostalgic LEGO® Nintendo Entertainment System™ (71374) model kit is perfect for you. Authentic and interactive The brick-built NES is packed with realistic details, including an opening slot for the Game Pak with a locking function and a controller with a connecting cable and plug. The console comes with a buildable retro TV, featuring a flat 8-bit Mario figure on the scrolling screen, plus an action brick to scan with LEGO® Mario™ (figure not included; find in the LEGO® Super Mario™ Starter Course set – 71360) so he reacts to the on-screen enemies, obstacles and power-ups just like in the Super Mario Bros. game. Creative fun This unique set is part of an inspiring collection of LEGO building sets for adults that make fabulous gifts for yourself and hobbyist friends who enjoy DIY challenges and proudly displaying their creations.',
'6434148');


INSERT INTO product_features (features_body, sku) 
VALUES (E'Trigger nostalgic memories as you build this wonderfully detailed LEGO® brick Nintendo Entertainment System™ (71374) and interactive, 1980s-style television displaying the classic Super Mario Bros.™ game\n
The TV has a handle-operated scrolling screen and if you scan the action brick by placing LEGO® Mario™ (figure not included) in the slot on top, he will react to the on-screen enemies, obstacles and power-ups\n
Authentic details of the NES console are recreated in LEGO® style, including a controller and an opening slot for the buildable Game Pak with a realistic locking function to delight Super Mario Bros.™ fans\n
Whether you were an NES gamer back in the day, a fan of retro stuff, or are just looking for an immersive, fun, creative DIY project to leave you feeling revitalized, this 2,646-piece model building kit is ideal for you\n
The buildable TV measures over 8” (22.5cm) high, 9” (23.5cm) wide and 6” (16cm) deep, and alongside the NES model makes a cool display item for your home or office. It also makes the best LEGO® gift for gamer friends',
'6434148');

