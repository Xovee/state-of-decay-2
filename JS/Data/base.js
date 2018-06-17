function base(map, name, totalArea, availableArea, influenceRequire, peopleRequire, exists, opens, pictureUrl){
    this.map = map;
    this.name = name;
    this.totalArea = totalArea;
    this.availableArea = availableArea;
    this.influenceRequire = influenceRequire;
    this.peopleRequire = peopleRequire;
    this.exists = exists;
    this.opens = opens;
    this.pictureUrl = pictureUrl;
}
var base1 = new base(0, "The Mourners", 8, 3, 0, 1, 
["Storage 2 二级仓库", "Chef's Kitchen 厨师的厨房", "Master Bedroom 主卧室", "Double bunk Room 上下铺卧室", "Parking 停车位 * 2", "Trash (Clearable) 垃圾堆（可清除）"], ["Small Indoor Slot 小型室内空地 * 2",],);
var base2 = new base(0, "Bridge Fort", 10, 4, 500, 4,
["Sheltered Beds 避难床位", "Western Watchpost 西部瞭望台", "Easten Watchpost 东部瞭望台", "Parking 停车位 * 3"], ["Large Slot 大型空地", "Small Indoor Slot 小型室内空地", "Small Outdoor Slot 小型室外空地 * 2",],);
var base3 = new base(0, "Church on the Hill", 11, 6, 1000, 5, 
["Bell Tower 钟楼", "Parking 停车位 * 4", "Pews (Clearable) 教堂座位（可清除） * 2", ], ["Large Slot 大型空地", "Small Indoor Slot 小型室内空地", "Small Outdoor Slot 小型室外空地 * 2", ]);
var base4 = new base(0, "Corner Office", 10, 5, 1000, 5, 
["Chic Eatery Kitchen 时髦厨房", "Overlook 瞭望台", "Sheltered Beds 避难床位", "Parking 停车位 * 2"], 
["Large Slot 大型空地", "Small Indoor Slot 小型室内空地", "Small Outdoor Slot 小型室外空地 * 3"]);
var base5 = new base(0, "Loch & Keogh Self Storage", 13, 5, 1500, 6, 
["Elaborate Storage 复式仓库", "Sheltered Beds 避难床位", "Secret Distillery 秘密酿酒厂", "Parking 停车位 * 3", "Watchtower 瞭望塔", "Abandoned Locker (Clearable) 废弃橱柜（可拆除） * 2"],
["Large Slot 大型空地", "Small Outdoor Slot 小型室外空地 * 2"]);
var base6 = new base(0, "Mohr & Mohr Distributing", 14, 5, 1500, 6, 
["Sheltered Beds 避难床位", "Sheltered Beds 2 二级避难床位", "Machine Shop 机械车间", "Parking 停车位 * 4", "Huge Fuel Storage 巨型储油仓库", "Backup Generator 备用发电机"],
["Large Slot 大型空地 * 2", "Small Indoor Slot 小型室内空地", "Small Outdoor Slot 小型室外空地 * 2"]);
var base7 = new base(0, "Container Fort", 12, 7, 3500, 8, 
["Firesafe Storage 防火仓库", "Parking 停车位 * 3", "Workshop 3 三级工坊"], 
["Large Slot 大型空地 * 2", "Small Outdoor Slot 小型室外空地 * 5"]);
var base8 = new base(1, "Clarington House", 8, 3, 0, 1, 
["Storage 2 二级仓库", "Chef's Kitchen 厨师的厨房", "Master Bedroom 主卧室", "Double bunk Room 上下铺卧室", "Parking 停车位 * 2", "Trash (Clearable) 垃圾堆（可清除）"], ["Small Indoor Slot 小型室内空地 * 2",],);
var base9 = new base(1, "The Mourners", 9, 4, 500, 4, 
["Parking 停车位 * 3", "Front Pews (Clearable) 前排座位（可清除）", "Community Food Bank 社区食物储存点", "Watchpost 瞭望台", "Rear Pews (Clearable) 后排座位（可清除）"], 
["Large Slot 大型空地", "Small Outdoor Slot 小型室外空地"]);
var base10 = new base(1, "Rural Police Station", 13, 5, 1000, 5, 
["Parking 停车位 * 4", "Police Armory 警察武器库", "Doorless Cells 没有门的单间", "Secure Lockers 保险柜", "Checkpoint 检查站"], 
["Large Slot 大型空地 * 2", "Small Indoor Slot 小型室内空地", "Small Outdoor Slot 小型室外空地 * 2"]);
var base11 = new base(1, "Mazzara Farm", 11, 5, 1000, 5, 
["Country Kitchen 乡村厨房", "Well House 水井坊", "Crewhouse 雇员宿舍", "Grain Silo Storage 谷仓", "Parking 停车位 * 2"], 
["Large Slot 大型空地 * 2", "Small Indoor Slot 小型室内空地", "Small Outdoor Slot 小型室外空地 * 2"]);
var base12 = new base(1, "Camp Kelenqua", 11, 6, 1000, 5, 
["Heavy Trash (Clearable) 大垃圾堆（可清除）", "Cafeteria Kitchen 自助餐厅", "Old Well 古井", "Parking 停车位 * 2", "Bunkhouse 工棚", "Seating Area (Clearable) 坐席区（可清除）"], 
["Large Slot 大型空地 * 2", "Small Indoor Slot 小型室内空地 * 2"]);
var base13 = new base(1, "Squelones Brewing Company", 14, 7, 1500, 6, 
["Tasting Room 品酒室", "Parking 停车位 * 3", "Primary Still 主蒸馏室", "Craft Still 手工蒸馏室", "Water Tank 水箱", "Keg Cooperage (Clearable) 制桶工厂（可清除）"], 
["Large Slot 大型空地", "Small Indoor Slot 小型室内空地 * 3", "Small Outdoor Slot 小型室外空地 * 2"]);
var base14 = new base(1, "Whitney Field", 15, 5, 3500, 8, 
["Sheltered Beds 2 二级避难床位", "Announcer Box 播音员室", "Fortified Bleachers 强化看台 * 2", "Outdoor Beds 2 二级室外卧室", "Outdoor Beds 室外卧室", "Parking 停车位 * 4"], 
["Large Slot 大型空地 * 3", "Small Outdoor Slot 小型室外空地 * 2"])

var baseList = [base1, base2, base3, base4, base5, base6, base7, base8, base9, base10, base11, base12, base13, base14];