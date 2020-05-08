#define SHIELD_HERO   0x01
#define SHIELD_MIRROR 0x02

typedef struct
{
	uint32_t base;	 // Base RAM Address
	uint32_t skeleton;
	uint16_t radius; // Collision Cylinder Radius
	uint16_t height; // Collision Cylinder Height
	float 	 rise;   // Units to be floated
} puppet_init_t;

typedef struct
{
    uint32_t Back;  	// Item on Back
    uint32_t Left;  	// Held Item (Left Hand)
    uint32_t Right; 	// Held Item (Right Hand)
	uint8_t nowShield; 	// Currently Equipped Shield
	uint8_t nowMask;    // Currently Worn Mask
} puppet_items_t;

typedef struct
{
	uint8_t isZZ;
	uint16_t eye_index;
	uint32_t eye_texture;
	puppet_init_t init;
} zzplayas_t;