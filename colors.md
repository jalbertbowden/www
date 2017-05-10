# Color in Cartography, Data. Data Visualizations, GIS, Geo, Maps, and Other Visualizations  

[Colors for DataVis](http://lisacharlotterost.github.io/2016/04/22/Colors-for-DataVis/)  

[The CIE Color Models](http://dba.med.sc.edu/price/irf/Adobe_tg/models/cie.html)  
CIE stands for Comission Internationale de l'Eclairage (International Commission on Illumination). The commission was founded in 1913 as an autonomous international board to provide a forum for the exchange of ideas and information and to set standards for all things related to lighting. As a part of this mission, CIE has a technical committee, Vison and Colour, that has been a leading force in colorimetry since it first met to set its standards in Cambridge, England, in 1931.  

The CIE color model was developed to be completely independent of any device or other means of emission or reproduction and is based as closely as possible on how humans perceive color. The key elements of the CIE model are the definitions of standard sources and the specifications for a standard observer.  

Standard Sources  
The following CIE standard sources were defined in 1931:  

• 		Source A  
A tungsten-filament lamp with a color temperature of 2854K  
• 		Source B  
A model of noon sunlight with a temperature of 4800K  
• 		Source C  
A model of average daylight with a temperature of 6500K  

Sources B and C are actually derived from source A through the use of filters that alter their spectral power distribution.  

CIE augmented these sources in 1965 with a number of standard illuminants. As mentioned in the Technical Guide, "Basic Color Theory for the Desktop," illuminants are not physical sources; rather, they are models of light defined by a spectral power distribution. CIE sources A, B, and C are also defined as standard illuminants.  

In addition, CIE has defined a series of daylight illuminants called the Daylight D series. Of these Illuminant D65 with a color temperature of 6500K is the most commonly referenced.  

Standard Observer  
CIE has two specifications for a standard observer: the original 1931 specification and a revised 1964 specification. In both cases the standard observer is a composite made from small groups of individuals (about 15-20) and is representative of normal human color vision. Both specifications used a similar technique to match colors to an equivalent RGB tristimulus value:  

The observer viewed a split screen with 100% reflectance (that is, pure white). On one half a test lamp cast a pure spectral color on the screen. On the other half, three lamps emitting varying amounts of red, green, and blue light attempted to match the spectral light of the test lamp. The observer viewed the screen through an aperture and determined when the two halves of the split screen were identical. The RGB tristimulus values for each distinct color could be obtained this way.  

The significant difference between the 1931 and 1964 standard observers was the field of vision used to view the screens. The 1931 observer had a 2° field of vision (i.e., the amount taken in by the fovea alone). This was later considered inadequate in many cases since it did not take in enough of the observer's peripheral vision. The 1964 specification widened the observer's field of vision to 10° in order to get tristimulus values that reflect a wider retinal sensitivity.  

CIE Models  
Once the RGB tristimulus values were obtained, they were found to be wanting in some regards. Due to gamut restraints, the RGB color model could not reproduce all spectral light without introducing the effect of negative RGB values (this was done by mixing red, green, or blue light with the test lamp as needed). CIE thought a system that used negative values would not be acceptable as an international standard. Accordingly, they translated the RGB tristimulus values into a different set of all positive tristimulus values, called XYZ, which formed the first CIE color model. From this first model, other models were derived in response to various concerns. Go to the following for a concise summary of each:  

	[CIEXYZ](http://dba.med.sc.edu/price/irf/Adobe_tg/models/ciexyz.html)  
The original CIE model using the chromaticity diagram adopted in 1931.  
	CIELUV](http://dba.med.sc.edu/price/irf/Adobe_tg/models/cieluv.html)  
A model composed in 1960 and revised in 1976. This model uses an altered and elongated form of the original chromaticity diagram in an attempt to correct its non-uniformity.  
	CIELAB](http://dba.med.sc.edu/price/irf/Adobe_tg/models/cielab.html)  
A different approach developed by Richard Hunter in 1942 that defines colors along two polar axes for color (a and b) and a third for lightness (L).  



## [ColorBrewer: Color Advice for Cartography and Maps](http://colorbrewer2.org/)  
[Colorbrewer Repository](https://github.com/axismaps/colorbrewer/)  


[How Color Notation Works](http://munsell.com/about-munsell-color/how-color-notation-works/)  

Here's How Munsell Color Theory Works...  

Munsell color order system is based on a three-dimensional model depicted in the Munsell color tree. Each color has three qualities or attributes:  

    Hue – color such as red, orange, yellow, etc.  
    Value – the lightness or darkness of a color  
    Chroma – the saturation or brilliance of a color  

Hue, value and chroma are also referred to as (HVC)  

[Munsell Color Theory](http://munsell.com/about-munsell-color/) is based on a three-dimensional model in which each color is comprised of three attributes of hue (color itself), value (lightness/darkness) and chroma (color saturation or brilliance)  

The Munsell Color system is set up as a numerical scale with visually uniform steps for each of the three color attributes—in Munsell color notation, each color has a logical and visual relationship to all other colors.  

[Lch Color Gradient Picker - jsfiddle](http://jsfiddle.net/d6wXV/6/embedded/result/)  


[Applying Artistic Color Theories to Visualization - Color Theory Book Chapter - Theresa Marie Rhynes via Wayback Machine](https://web.archive.org/web/20160709021558/http://theresamarierhyne.com:80/Theresa-Marie_Rhynes_Viewpoint/Color_Theory_Book_Chapter.html)  

[Expanding the Frontiers of Visual Analytics and Visualization])http://ncva.itn.liu.se/resources/publications/1.557010/ExpandingtheFrontiersofVisualAnalyticsandVisualization.pdf)  


[Colored Relief Shading](https://web.archive.org/web/20140806031141/http://www.reliefshading.com/colors/index.html)  
[Relief Shading Examples](https://web.archive.org/web/20140818054208/http://www.reliefshading.com/examples/index.html)  


# Subtleties of Color  

[Subtleties of Color Part 1: Elegant Figures](http://earthobservatory.nasa.gov/blogs/elegantfigures/2013/08/05/subtleties-of-color-part-1-of-6/)  
[Part  2: The “Perfect” Palette](http://earthobservatory.nasa.gov/blogs/elegantfigures/2013/08/06/subtleties-of-color-part-2-of-6/)  
[Part 3: Different Data, Different Colors](http://earthobservatory.nasa.gov/blogs/elegantfigures/2013/08/05/subtleties-of-color-part-1-of-6/013/08/12/subtleties-of-color-part-3-of-6/)  
[Part 4: Connecting Color to Meaning](http://earthobservatory.nasa.gov/blogs/elegantfigures/2013/08/19/subtleties-of-color-connecting-color-to-meaning/)  
[Part 5: Tools &amp; Techniques](http://earthobservatory.nasa.gov/blogs/elegantfigures/2013/08/28/subtleties-of-color-part-5-of-6/)  
[Part 6: References &amp; Resources for Visualization Professionals](http://earthobservatory.nasa.gov/blogs/elegantfigures/2013/09/10/subtleties-of-color-part-6-of-6/)  









