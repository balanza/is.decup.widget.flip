# Alloy *Flip* Widget [![Appcelerator Titanium](http://www-static.appcelerator.com/badges/titanium-git-badge-sq.png)](http://appcelerator.com/titanium/) [![Appcelerator Alloy](http://www-static.appcelerator.com/badges/alloy-git-badge-sq.png)](http://appcelerator.com/alloy/)

This is a widget for the [Alloy](http://projects.appcelerator.com/alloy/docs/Alloy-bootstrap/index.html) MVC framework of [Appcelerator](http://www.appcelerator.com)'s [Titanium](http://www.appcelerator.com/platform) platform.

It implements a vertical flipping card using images.

## Install
### Manual installation

1. Download `/is.decup.widget.flip` folder and place it in the `/app/widgets` folder
2. Add `"is.decup.widget.flip": "1.0"` ad dependency into your app's `config.json` file

### Using gitTio
Pending

### Usage
You can use this widget in three different ways:
#### 1. Declare in view
Declare as an Alloy markup tag, passing parameters as attributes

    <Widget id="card" src="is.decup.widget.flip" 
            flipped="true"    
            duration="300" 
            frontImage="/front.png" 
            backImage="/back.png">
    </Widget>
    
#### 2. Declare in controller


    var card = Alloy.createWidget("is.decup.widget.flip", {
        flipped: true,    
        duration: 300,
        frontImage: "/front.png",
        backImage: "/back.png"
    });
    
    
#### 3. Mixed mode
Useful when card's parameters are not known at declaration time, but you want to keep the declaration in the view. You can even force widget's reload with this call

    // $.card declared in view
    $.card.init({
        flipped: true,    
        duration: 300,
        frontImage: "/front.png",
        backImage: "/back.png"
    });



### Configuration
The widget allows configuration by the following parameters:

#### frontImage (required)
*string | Ti.Blob | Ti.Filesystem.File*

The image representing the front side of the card.

#### backImage (required)
*string | Ti.Blob | Ti.Filesystem.File*

The image representing the back side of the card.

#### flipped 
*Boolean*

The starting status of the card: *true* shows the front side, *false* the back side. Default: false.

#### duration 
*Number*

The duration of the animation, in milliseconds. Is meant to be the whole flipping movement. Default: 500.


## API
The widget exposes the following functions and properties for interacting with your app

#### init(params)
Dynamical initialization for the widget.

***params*** - Object with the above configuration params

#### isFlipped
Property that indicated the status of the card



#### flip()
Flips the card in the opposit state in which is now (works as a toggle function)

#### reveal()
If the card is not flipped, it reveals. Otherwise, does nothing.
 

#### cover()
If the card is flipped, it covers. Otherwise, does nothing.
 
 
 

## License

<pre>
Copyright 2015 Emanuele De Cupis

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
</pre>
