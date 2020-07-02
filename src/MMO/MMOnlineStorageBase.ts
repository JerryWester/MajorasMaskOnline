  
import {
  SCENE_ARR_SIZE,
  EVENT_ARR_SIZE,
  ITEM_FLAG_ARR_SIZE,
  INF_ARR_SIZE,
  SKULLTULA_ARR_SIZE,
} from './MMO';
import {
  IDungeonItemSave,
  OotoDungeonItemContext,
  InventorySave,
  EquipmentSave,
  QuestSave,
} from './data/OotoSaveData';
import { SavedLogEntry } from './data/keys/KeyLogEntry';

export class MMOnlineStorageBase {
  constructor() {}
  
  sceneStorage: Buffer = Buffer.alloc(SCENE_ARR_SIZE);
  eventStorage: Buffer = Buffer.alloc(EVENT_ARR_SIZE);
  itemFlagStorage: Buffer = Buffer.alloc(ITEM_FLAG_ARR_SIZE);
  infStorage: Buffer = Buffer.alloc(INF_ARR_SIZE);
  skulltulaStorage: Buffer = Buffer.alloc(SKULLTULA_ARR_SIZE);
  playerModelCache: any = {};
  dungeonItemStorage: IDungeonItemSave = new OotoDungeonItemContext();
  inventoryStorage: InventorySave = new InventorySave();
  equipmentStorage: EquipmentSave = new EquipmentSave();
  questStorage: QuestSave = new QuestSave();
  changelog: Array<SavedLogEntry> = new Array<SavedLogEntry>();
  bank: number = 0;
}