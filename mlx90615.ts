// Add your code here

enum MLX90615enum {
    MLX90615_I2C_ADDR	        =	0x5B,
    MLX90615_REG_ID_LOW	        =	0x1E,
    MLX90615_REG_ID_HIGH	    =	0x1F,
    MLX90615_REG_TEMP_AMBIENT   =	0x26,
    MLX90615_REG_TEMP_OBJECT    = 	0x27
}

//% color="#AA278D"
namespace MLX90615 {
    let addr: number; 
    //% block
    export function setup_mlx90615() {
        addr = MLX90615enum.MLX90615_I2C_ADDR;
    }

    //% block
    export function readObj() : number {
        return read16(MLX90615enum.MLX90615_REG_TEMP_OBJECT) * 0.02 - 273.15; ;
    }

    //% block
    export function readAbt() : number {

        return read16(MLX90615enum.MLX90615_REG_TEMP_AMBIENT) * 0.02 - 273.15;
    }

    function read16(reg: number): number{
        let data: number;
        pins.i2cWriteNumber(addr, reg, NumberFormat.Int8LE)
        data = pins.i2cReadNumber(reg, NumberFormat.Int16LE);
        // pins.i2cReadBuffer(0, 0)
        return data; 
    }
}

// uint16_t MLX90615::read_word16(uint8_t reg) {
//   uint16_t data;

//   Wire.beginTransmission(i2c_addr_);
//   Wire.write(reg);
//   Wire.endTransmission(false);
  
//   Wire.requestFrom(i2c_addr_, (uint8_t)3);
//   data = Wire.read();       // read low byte
//   data |= Wire.read() << 8; // read high byte

//   Wire.read(); // read and discard PEC (packet error code)

//   return data;
// }
