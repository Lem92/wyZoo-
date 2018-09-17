## PNG Sprites

1. Save icons to ``` dev\images\useful\sprites\theme\not-render ``` with name in format ``` ico-myicon.png ```
2. Run in console gulp task ``` gulp sprite:build ```
3. The generation of styles will happen automatically with the help of a mixin ``` .sprites(@spritesheet-sprites); ``` in a file ``` dev\less\_includes\icons.less ```
4. DONE!!!

---