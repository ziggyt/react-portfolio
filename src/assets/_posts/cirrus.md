# Macro pad with 8 keys, rotary encoders and QMK support


As 2021 was coming to an end, I started tinkering with KiCAD (EDA software), with the goal of creating a macro pad, for custom shortcuts in certain applications (and as I'm using a 75% keyboard, sometimes there are a few keys that would be neat to have during specific circumstances).

I've gone through several iterations since then, creating 10+ different macro pads (Pro micro based, Atmega32u4 based, and finally Atmega328p based), as well as a 65% keyboard using only through hole components (which you might see on this blog at a later date).

Cirrus 8 is a Pro Micro based macropad, that supports up to 8 keys, as well as 3 rotary encoders. Why would anyone need 3 rotary encoders you might ask? That's a good question, that I hope to publish some use cases with at a later date.

#### Finished Macropad
The finished macropad currently has 3D-printed rotary encode knobs and PBT DSA profile keycaps.

![plot](https://github.com/draforfrogan/portfolio-blog/raw/master/assets/images/irl_cirrus_front.png)


![plot](https://github.com/draforfrogan/portfolio-blog/raw/master/assets/images/irl_cirrus_back.png)



### Design philosophy
The underlying motivation for this macro pad is that 8 keys are more than enough for my use cases, which opened up for using QMKs DIRECT_PIN functionality (since we can afford to use a single pin for each switch, instead of a switch matrix approach), and thus not requiring diodes to work correctly. This in turn decreases the assembly complexity of the macro pad, as well as the cost. I did not want to force the use of a rotary encoder, and also not leave half of the available pins unused, which resulted in a combined footprint, which allowes the user to select what they prefer.

The size and form factor is carefully chosen to comply with JLCPCB's size standard, in order to make it possible to order 5 of these boards for about 2$.

The design is:
* Diodeless
* Uses a Pro Micro
* Economical form factor
* Easy to assemble

#### Future revisions
* Free up SDA and SCL
* Under mounted Pro Micro to make room for OLED display

### Features
* 5 - 8 Mechanical Cherry style switches
* 0 - 3 Rotary encoders
* Underglow (using 6 WS2812B SMD LEDs)
* Underglow breakout pins for use with a WS2812B LED strip

### PCB
#### Top view

![plot](https://github.com/draforfrogan/portfolio-blog/raw/master/assets/images/top.png)
#### Bottom view
![plot](https://github.com/draforfrogan/portfolio-blog/raw/master/assets/images/bottom.png "plot")

### Plate
TODO

### Firmware
The firmware is made using QMK, and can be flashed to the macro pad by first resetting the Pro Micro (shorting RST and GND) and then using

```c
qmk flash -kb cirrus8 -km default
```

### Build Guide and BOM

Found here:

### Links
KiCAD project, Gerbers and QMK firmware can be found on the GitHub repo here: LINK
