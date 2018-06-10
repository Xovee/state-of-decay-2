//近战武器数据
function closeCombatWeapon(name, type, description, cnDescription){
	this.name = name;
	this.type = type;
	this.description = description;
	this.cnDescription = cnDescription;
}
var closeCombatWeapon1 = new closeCombatWeapon("Chef's Knife", '近战武器', "A classic chef's knife, just long enough to wield in combat when you don't have something better.", '一个经典的厨师刀，仅仅在你没有更好的武器之时使用。');
var closeCombatWeapon2 = new closeCombatWeapon("Rusty Screwdriver", '近战武器', "An old but sturdy crewdriver, fit to puncture zombie skulls in up-class situations.", "一个比较旧但还算结实的螺丝刀，在大多数情况下都可以用来刺穿僵尸的脑袋。");

// var closeCombatWeapon = new closeCombatWeapon("", '近战武器', "", "");

var closeCombatWeaponList = [closeCombatWeapon1, closeCombatWeapon2];

closeCombatWeaponList.sort(compare);

//格斗武器数据
function meleeWeapon(name, type, typeCategory, salvage, description, cnDescription){
	this.name = name;
	this.type = type;
	this.secondType = typeCategory;
	this.salvage = salvage;
	this.description = description;
	this.cnDescription = cnDescription;
}
var meleeWeapon1 = new meleeWeapon('Oversize Mallet', '格斗武器', '钝器', 15, "It's not easy to swing the big-ass hammer, but you&apos;ll be happy at the result.", '挥动这个变态的大家伙并不轻松，不过你会满意它的效果。');
var meleeWeapon2 = new meleeWeapon('Advanced Choke', '格斗武器', '钝器', '?', "A finely machined \"Full\" choke, built to maximize range and minimize spread on any compatible weapon.", "");
var meleeWeapon3 = new meleeWeapon('Breaking Hammer', '格斗武器', '钝器', 17, "When the folks in uniform need a hammer to break a door, it looks like this. Works on Zombies, too.", "当人们打算用一个锤子来敲破一个门的时候，它看起来不能再合适了。对付僵尸也是。");
var meleeWeapon4 = new meleeWeapon('Crowbar', '格斗武器', '钝器', 22, "	A zombie-slaying classic. Heavy and hardhitting, nearly impossible to break.", "经典的僵尸杀戮武器。重，强力的打击效果，几乎不可能被破坏。");
var meleeWeapon5 = new meleeWeapon('Demo Hammer', '格斗武器', '钝器', 15, "Once used only to destroy, now you can put this tool to use in protecting the living.", "一度只被用来毁灭一切的武器，不过现在你可以用它来保护生命。");
var meleeWeapon6 = new meleeWeapon('Nail puller', '格斗武器', '钝器', 17, "It's kind of like a hammer without the nailpounding head part. Still packs plenty of punch.", "它像一把没有nailpounding head的锤子，但依旧拥有很好的冲击力。");
var meleeWeapon7 = new meleeWeapon('Oversize Mallet', '格斗武器', '钝器', 15, "It's not easy to swing the big-ass hammer, but you'll be happy at the result.", "挥动这个变态的大家伙并不轻松，不过你会满意它的效果。");
var meleeWeapon8 = new meleeWeapon('Pipe Threader', '格斗武器', '钝器', 22, "This heavy-duty hand-threader works surprisingly well as a heavy-duty club.", "");
var meleeWeapon9 = new meleeWeapon('Pipe Wrench', '格斗武器', '钝器', 24, "It's not exactly designed for zombie-killing, but it does sound good hitting a skull.", "其实它并不是设计用来打僵尸的，但对于打碎头骨它非常合适。");
var meleeWeapon10 = new meleeWeapon('Rebar', '格斗武器', '钝器', 16, "A piece of concrete-support ripped out of a building. Incredibly sturdy and incredibly heavy.", "从一个建筑上取下来的混凝土钢筋。难以置信的结实，难以置信的重。");
var meleeWeapon11 = new meleeWeapon('Transmission Mace', '格斗武器', '钝器', 28, "An absurdly oversized bludgeon, built from a salvaged transmission.Nearly impossible to break, with a strong tendency to knock zeds on their asses.", "一个大到荒谬的棍棒，由回收的传送装置制成。几乎不会毁坏，可以非常有效的让僵尸乖乖躺在地上。");
var meleeWeapon12 = new meleeWeapon('Bowie Machete', '格斗武器', '锐器', 12, "This vicious blade is startlingly effective at killing zeds.", "这把邪恶的武器用来杀僵尸有着惊人的效果。");
var meleeWeapon13 = new meleeWeapon('Brush Axe', '格斗武器', '锐器', 9, "A useful tool for clearing brush, the humble brush axe is startlingly effective at removing zombie limbs.", "一个好用的工具，用来清理灌木丛，这个简陋的斧头拥有惊人的效果来砍掉僵尸的四肢。");
var meleeWeapon14 = new meleeWeapon("Carpenter's Hatchet", '格斗武器', '锐器', 12, "It's designed to chop wood, but it works on zombies just as well.", "虽然是设计用来砍木头的，不过用来砍僵尸效果一样的好。");
var meleeWeapon15 = new meleeWeapon('Cleaver', '格斗武器', '锐器', 12, "Fresh meat is in short supply nowadays, but there's plenty of rotten flesh to carve.", "新鲜的肉类食物在现在非常稀有，但是有一大堆一大堆的腐烂肉等着你去切。");
var meleeWeapon16 = new meleeWeapon('Cutting Machine Blade', '格斗武器', '锐器', 18, "Ripped from an industrial cutter and gripped with paracord, this hunk of metal has seen it's way through dozens of zed.", "从一个工业刀具上拆下来的，用绳子当刀把，这片厚金属已经证明了它是杀僵尸的利器。");
var meleeWeapon17 = new meleeWeapon('Deck Destroyer', '格斗武器', '锐器', 12, "A specialized deck teardown tool that also does an admirable job of ripping apart zombies.", "一个特殊的桌面拆卸工具，也可以用来把僵尸拆成块儿。");
var meleeWeapon18 = new meleeWeapon('Kama', '格斗武器', '锐器', 9, "This traditional Japanese grass cutting tool has been used as an improvised weapon for centuries.<br>Carry on the tradition.", "这个传统的日本割草工具几个世纪以来都被当作一个临时的武器。<br>请保持这个传统。");
var meleeWeapon19 = new meleeWeapon('Kukri', '格斗武器', '锐器', 19, "This blade might once have only seen service on special occasions, but now it's an everyday killing tool.", "这把武器本来只使用于特殊场合，不过现在它是每天都会使用的杀戮工具。");
var meleeWeapon20 = new meleeWeapon('Machete', '格斗武器', '锐器', 12, "This humble tool doesn't care if it's hacking through underbrush or zombie limbs.", "这款简陋的工具并不在乎它是用来砍灌木丛的，或者是用来砍僵尸的。");
var meleeWeapon21 = new meleeWeapon('Mail-Order Wakizashi', '格斗武器', '锐器', 6, "This thing looks way more lethal than it truly is. Still, it's not bad for costing just three easy payments of $19.95.", "这把武器使用起来没看起来那么厉害，不过对于其19.95美元的价格来说还不算太坏。");
var meleeWeapon22 = new meleeWeapon('Monogear Axe', '格斗武器', '锐器', 15, "It may have started as a bicycle gear, but not it exists only to cleave zombie skulls.", "也许它一开始只是个自行车的装置，但它的存在并不只为了切开僵尸的脑袋。");
var meleeWeapon23 = new meleeWeapon('Parang', '格斗武器', '锐器', 10, "This machete-like blade is found all across South East Asia ... and in the states, wherever \"exotic\" knives are sold.", "这把很像弯刀的锐器流行于东南亚的各个国家……并且在这些国家里，到处都卖着“洋”刀。");
var meleeWeapon24 = new meleeWeapon('Police Baton', '格斗武器', '锐器', 11, "You can rely on this lightweight bludgeon to \"serve and protect\" you and your community.", "你可以依赖这把轻量的警棍去“服务和保护”你和你的社区。");
var meleeWeapon25 = new meleeWeapon('Rebar Blade', '格斗武器', '锐器', 24, "Somebody forget this durable sword out of solid rebar. If it doesn't slice 'em open, it'll probably knock 'em down.", "有些人忘了这把耐用的武器是用钢材制作的。如果它没有将敌人撕裂，那么它肯定把敌人砍倒在地。");
var meleeWeapon26 = new meleeWeapon('Tactihawk', '格斗武器', '锐器', 9, "Made overseas. Bought on the Internet. Never used ... until now.", "海外制作。购买于互联网。从来没被使用过，直到现在。");
var meleeWeapon27 = new meleeWeapon("Tire Iron", '格斗武器', '钝器', 16, "This lightweight bludgeon is as good at cracking skulls as it is at fixing tires. Maybe better, to be honest.", "");
// var meleeWeapon = new meleeWeapon("", '格斗武器', '', , "", "");


var meleeWeaponList = [meleeWeapon1, meleeWeapon2, meleeWeapon3, meleeWeapon4, meleeWeapon5, meleeWeapon6, meleeWeapon7, meleeWeapon8, meleeWeapon9, meleeWeapon10, meleeWeapon11, meleeWeapon12, meleeWeapon13, meleeWeapon14, meleeWeapon15, meleeWeapon16, meleeWeapon17, meleeWeapon18, meleeWeapon19, meleeWeapon20, meleeWeapon21, meleeWeapon22, meleeWeapon23, meleeWeapon24, meleeWeapon25, meleeWeapon26, meleeWeapon27];

meleeWeaponList.sort(compare);

//远程武器数据
function rangedWeapon(name, type, typeCategory, caliber, capacity, salvage, muzzleMod, description, cnDescription){
	this.name = name;
	this.type = type;
	this.secondType = typeCategory;
	this.caliber = caliber;
	this.capacity = capacity;
	this.salvage = salvage;
	this.muzzleMod = muzzleMod;
	this.description = description;
	this.cnDescription = cnDescription;
}
var rangedWeapon1 = new rangedWeapon('P220-9', '远程武器', '手枪', '9mm rounds', 15, 26, true, 'A modern European defensive handgun.<br>Reliable and fairly accurate for a weapon in this caliber, the P220 is a favorite of many firearms trainers.', '现代欧式自卫手枪。<br>在同口径的武器里拥有出色的稳定性和相当的准确性，P220是许多枪械训练者的最爱。');
var rangedWeapon2 = new rangedWeapon('Xovee', '远程武器', '突击步枪', '100mm rounds', 10000, 10000, true, 'Creator of this website!', '本站的创建者！<br>微博/Weibo：<a href="http://weibo.com/xovee">Xovee</a><br>邮箱/Mailbox：<a href="mailto:Xovee@qq.com">Xovee@qq.com</a>');
var rangedWeapon3 = new rangedWeapon('JL 94 Civilian', '远程武器', '步枪', '9mm rounds', 30, 25, true, 'A civilian-legal semi-auto version of the MP5A2 submachine gun. Retains the accuracy and stability of the military model.', '一款平民合法持有的MP5A2冲锋枪型号。配置的军用模型让其拥有不错的准确性和稳定性。');
var rangedWeapon4 = new rangedWeapon('10/22 Carbine', '远程武器', '步枪', '.22 cal', 10, 23, true, 'Ultralight, precise, semi-auto, mag-fed scout rifle. The scourge of varmints across the USA.', '超轻、精确、半自动、mag-fed共同定义了这把侦查步枪。被称为美国流氓的鞭子。');
var rangedWeapon5 = new rangedWeapon('Heirloom Model 70', '远程武器', '步枪', '7.62mm rounds', 5, 30, true, 'A grizzled veteran of some long-ago war, this rifle has been lovingly maintained. The well-worn bolt cycles quickly, and fringer grooves worn into the furniture off a steady grip.<br>Bolt-action rifles never jam or break.', '来自一个参加过很久以前的战争的老兵，被非常用心的维护着。');
var rangedWeapon6 = new rangedWeapon('Custom AK-47', '远程武器', '突击步枪', '7.62mm rounds', 40, 25, true, 'Features a unique helical magazine with incredible capacity, as well as a bralce and a mid-range optic. The name is inscribed on the barrel. How exactly this arrived in the U-S-of-A is a mystery forever lost to time.', '');
var rangedWeapon7 = new rangedWeapon("G17", '远程武器', '手枪', '9mm rounds', 17, 23, true, "A ubiquitous, lightweight, and reliable highcapacity pistol,well-suited to engagements from short to medium range.", "一款常见、轻量、可靠，以及高容量的手枪，适用于短到中距离的战斗。");
var rangedWeapon8 = new rangedWeapon("King Vulture .44", '远程武器', '手枪', '.44 Magnum HP', 10, 30, true, "The highest caliber semi-automatic handgun in the land, with power and kick to match.<br>This limited release features an extended magazine, hair trigger, and hunting scope.<br>May not fit standart holsters.", "地表最大口径的半自动手枪，带来强大的威力和后坐力。<br>这款限量手枪拥有扩大的弹夹，容易触发的扳机以及瞄准镜。<br>普通的手枪皮套也许并不适用。");
var rangedWeapon9 = new rangedWeapon("SP101 Devilette .22", '远程武器', '左轮手枪', '.22 cal', 8, 30, true, "A Snub-nosed 8-shot revolver good for newbies. Easy to control but slow to reload.<br>Revolvers never jam or break.", "新兵使用的塌鼻子8发左轮手枪。容易操控，但装弹很慢。<br>左轮手枪永远不会阻塞或者毁坏。");
var rangedWeapon10 = new rangedWeapon("PPK", '远程武器', '手枪', '.22 cal', 10, 16, true, "Easily concealed, lightweight self-defense pistol. Often seen on the big screen in the hands of spies with drinking problems.", "容易隐藏、轻量的自卫武器。在电影里经常可以看到那些有着酗酒问题的间谍们会使用它。");
var rangedWeapon11 = new rangedWeapon("Precision G17", '远程武器', '手枪', '9mm rounds', 17, 23, true, "This reliable, high-capacity pistol has been sighted and fine-tuned.", "这把可靠的、高容量的手枪经过了细微的调整。");
var rangedWeapon12 = new rangedWeapon("Target Mk3", '远程武器', '手枪', '.22 cal', 10, 23, true, "Easy-to-control target-shooting pistol with minimal stopping power.<br>Good in the hands of a beginner, but surgical in the hands of a pro.", "容易使用的射击手枪，拥有最小的stopping power。<br>非常适合新手的武器，对于老手来说还是差了一点。");
var rangedWeapon13 = new rangedWeapon("Viper", '远程武器', '左轮手枪', '.357 HP', 6, 30, true, "A Collector's edition six-round revolver with good stopping power and incredible durability.<br>Revolvers never jam or break.", "一款收藏家版本的6发左轮手枪，拥有出色的阻滞力和惊人的耐久性。<br>左轮手枪永远不会阻塞或者毁坏。");
var rangedWeapon14 = new rangedWeapon("Eternal Guard's Infinite Rage", '远程武器', '突击步枪', '7.62mm rounds', 150, 30, true, "Features a unique helical magazine with incredible capacity, as well as a bralce and a mid-range optic. The name is inscribed on the barrel. How exactly this arrived in the U-S-of-A is a mystery forever lost to time.", "");
var rangedWeapon15 = new rangedWeapon("MP5A2", '远程武器', '突击步枪', '9mm rounds', 30, 25, true, "Globally popular submachine gun with excellent handling, capacity, accuracy, and rate of fire.", "流行于全世界的冲锋枪，拥有出色的性能、容量、准确性，和开火速度。");
var rangedWeapon16 = new rangedWeapon("SCAR-H", '远程武器', '突击步枪', '7.62mm rounds', 20, 26, true, "Exremely modular modern assault rifle in a \"heavy\" configuration.", "极度模块化的现代突击步枪，拥有“heavy”配置。");
var rangedWeapon17 = new rangedWeapon("M99X1 Timberwolf", '远程武器', '反器材步枪', '.50 AP', 7, 23, true, "An ultralight bolt, integral suppressor, and barrel mode of some experimental composite make for a truly frightening weapon. <br>Likely fielded as a last-ditch effort to counter the growing zombie threat. <br>It's yours now. Take good care of it. <br>Bolt-action rifles never jam or break.", "超轻的枪栓、完整消音器，以及配置有实验性的复合枪管让它成为一个真正有威胁力的武器。<br>就像在战场上用尽最后的力量来抵抗不断增长的僵尸威胁。<br>现在它是你的了，请好好对待它。<br>栓式步枪永远不会堵塞或者毁坏。");
var rangedWeapon18 = new rangedWeapon("Model 870", '远程武器', '霰弹枪', '12g shells', 6, 26, true, "A classic hunting shotgun with good range and accuracy. The most widely mass-produced shotgun in the world.", "一个经典的打猎用霰弹枪，拥有出色的射程和准确性。它是这个世界上生产规模最大的霰弹枪。");
var rangedWeapon19 = new rangedWeapon("Reliable 870 Sawed-Off", '远程武器', '霰弹枪', '12g shells', 6, 26, true, "A home defender that has defended many homes over many life times, now cut down for better portability and mobility.<br>The springs and crews on the loading port have been fine tuned to speed up reloads.", "曾经被一个守卫者用来保护了许多许多的生命，现在则被改造的更轻便。<br>装弹部分的Springs和crews已经被很好的调整，来加快装弹速度。");
var rangedWeapon20 = new rangedWeapon("B50FG", '远程武器', '榴弹炮', '.50 AP', 12, 19, true, "A crude prototype meant to bring the power of an anti-aircraft gun down to portable size.<br>If you dream of raw, blistering firepower, this is weapon for you.", "一个粗糙的原型意味着将高射炮的威力降低到一个可移动的尺寸。<br>如果你梦想着一个生猛的武器，就是它了。");
var rangedWeapon21 = new rangedWeapon("M203 Standalone", '远程武器', '发射器', '40mm grenade', 1, 30, false, "A standard US Army grenade launcher fitted to a pistol grip with a shoulder stock. Think of it as a long-range explosive-delivery system.", "一款标准的美式军用炮弹发射器，装在一个手枪的握把上，还配有一个枪托。把它想做是一个长距离炸弹运输系统吧！");
var rangedWeapon22 = new rangedWeapon("MAC-10", '远程武器', '突击手枪', '.45 cal rounds', 30, 37, true, "Renowned for its compactness, incredible rate of fire, stopping power, and capacity, but also for terrible handing and low durability. Best known for showing up in the hands of badguys in action movies.", "");
var rangedWeapon23 = new rangedWeapon("Model 70 Classic", '远程武器', '步枪', '7.62mm rounds', 5, 30, false, "A classic bolt-action hunting rifle, found throughout the remains of rural America.<br>Revered for the quality of its manufacture.<br>Bolt-action rifles never jam or break.", "");

// var rangedWeapon = new rangedWeapon("", '远程武器', '', '', , , , "", "");

var rangedWeaponList = [rangedWeapon1, rangedWeapon2, rangedWeapon3, rangedWeapon4, rangedWeapon5, rangedWeapon6, rangedWeapon7, rangedWeapon8, rangedWeapon9, rangedWeapon10, rangedWeapon11, rangedWeapon12, rangedWeapon13, rangedWeapon14, rangedWeapon15, rangedWeapon16, rangedWeapon17, rangedWeapon18, rangedWeapon19, rangedWeapon20, rangedWeapon21, rangedWeapon22, rangedWeapon23];

rangedWeaponList.sort(compare);
