import {
  SCENE_ARR_SIZE,
  EVENT_ARR_SIZE,
  ITEM_FLAG_ARR_SIZE,
  MASK_FLAG_ARR_SIZE,
  WEEK_EVENT_ARR_SIZE,
} from './MMOnline';
import {
  IDungeonItemSave,
  MMODungeonItemContext,
  InventorySave,
  EquipmentSave,
  QuestSave,
  PhotoSave,
  SkullSave,
  StraySave,
} from './data/MMOSaveData';

export class MMOnlineStorageBase {
  constructor() {}
  photoStorage: PhotoSave = new PhotoSave();
  skullStorage: SkullSave = new SkullSave();
  strayStorage: StraySave = new StraySave();
  sceneStorage: Buffer = Buffer.alloc(SCENE_ARR_SIZE);
  eventStorage: Buffer = Buffer.alloc(EVENT_ARR_SIZE);
  itemFlagStorage: Buffer = Buffer.alloc(ITEM_FLAG_ARR_SIZE);
  playerModelCache: any = {};
  dungeonItemStorage: IDungeonItemSave = new MMODungeonItemContext();
  inventoryStorage: InventorySave = new InventorySave();
  bottleStorage: InventorySave = new InventorySave();
  equipmentStorage: EquipmentSave = new EquipmentSave();
  questStorage: QuestSave = new QuestSave();
  minimapStorage: Buffer = Buffer.alloc(0x1C);
  tradeStorage: InventorySave = new InventorySave();
  bank: number = 0;
  permFlags: Buffer = Buffer.alloc(0x960);
  permEvents: Buffer = Buffer.alloc(152);
}