# [MAUP - Modifiable Areal Unit Problem](http://support.esri.com/other-resources/gis-dictionary/term/MAUP)  

MAUP - spatial analysis] Acronym for modifiable areal unit problem. A challenge that occurs during the spatial analysis of aggregated data in which the results differ when the same analysis is applied to the same data, but different aggregation schemes are used. MAUP takes two forms: the scale effect and the zone effect. The scale effect exhibits different results when the same analysis is applied to the same data, but changes the scale of the aggregation units. For example, analysis using data aggregated by county will differ from analysis using data aggregated by census tract. Often this difference in results is valid: each analysis asks a different question because each evaluates the data from a different perspective (different scale). The zone effect is observed when the scale of analysis is fixed, but the shape of the aggregation units is changed. For example, analysis using data aggregated into one-mile grid cells will differ from analysis using one-mile hexagon cells. The zone effect is a problem because it is an analysis, at least in part, of the aggregation scheme rather than the data itself.  

[MAUP - An Introduction to the Modifiable Areal Unit Problem](http://gispopsci.org/maup/)  
[http://gispopsci.org/wp-content/uploads/2012/09/MAUPZone1-135x300.gif](http://gispopsci.org/wp-content/uploads/2012/09/MAUPZone1-135x300.gif)
The modifiable areal unit problem (MAUP) is one of the better-known problems in geography and spatial analysis. This phenomenon illustrates both the need for considering space in one’s analysis, and the fundamental uncertainties that accompany real-world analysis.

The MAUP is “a problem arising from the imposition of artificial units of spatial reporting on continuous geographical phenomena resulting in the generation of artificial spatial patterns” (Heywood, 1988). In other words, artifacts or errors are created when one groups data into units for analysis. An example of this is the cancer rate in a population. Cancer occurs in unique individuals, in unique locations. Yet researchers often want to understand cancer in a broader sense so they will group these data points together for ease of understanding and analysis. A map with millions of dots indicating cancer diagnosis is not particularly useful, but a map showing different cancer rates per population by county may be more so. However, this grouping may distort or exaggerate the actual data pattern.

There are two distinct types of MAUP: Scale (or aggregation) and zone (or grouping).

Scale MAUP

The scale at which one chooses to analyze information, be it for the entire United States, by state, by county, or even block-by-block, can produce different results. The cancer rate for the United States as whole is different from what it is for the state of Alabama, which is again different from that of Mobile County, which is again different from a particular neighborhood in Mobile. As with all analyses, it is important to choose your scale to match your research question: Investigating the effects of a new county hospital by looking at state-wide mortality rates is not ideal. However, research data often comes in prepackaged sizes. If you are unable to choose the scale of your data, be aware of its implications and, if possible, choose a finer scale than you think is necessary. Finer-scale data can be aggregated, while coarser scale data cannot easily be divided.

Zone MAUP


Figure 1
The zones or grouping schemes that one uses for data analysis can also be an issue, even if the units are all of the same scale. In Figure 1 we can see that different zones can create very different results for the same set of data points. While this effect may accidentally add sources of error or mis-interpretation into a research project, it may also be used to intentionally manipulate the results. Just imagine that Figure 1 represents political party affiliation instead of cancer incidence, and you will understand the implications. This occurs in politics so often that it has it’s own terms: gerrymandering and political redistricting. The take-away message for researchers is that when you have the ability to create your own zones you should do so simply, yet critically. Try and make your zones easy to understand and duplicate, and base them on some sort of simple logic, such as simple shapes of an equal area, or along preexisting physical or social divisions. However, you should be aware that any set of rules creates bias; thus, you should compare the results of different schemes. When you are working with data that has already been placed into zones—as is so often the case—be critical. Are the results important or simply artifacts of geographical division? Are there a number of cases located near the boundaries of zones that would change the results if they moved slightly? These are some of the questions that one can ask.

<ul>
<li>Getis, A. <a href=" http://csiss.org/streaming_video/2002/player.php?ws=spa&amp;lect=spa_probs&amp;conn=hil"><em>Problems Associated with Spatial Pattern Analysis</em></a>. A brief video presentation about the MAUP and similar issues by one of the most well known geographers today.</li>
<li><a href=" http://keith-travelsinindonesia.blogspot.com/2011/11/modifiable-areal-unit-problem-and.html"><em>The Modifiable Areal Unit Problem and Administrative Proliferation in Indonesia</em></a>. An easy to understand blog post about the MAUP that uses Indonesia as an example.</li>
<li>Yang, T.‐C. <a href="http://help.pop.psu.edu/gia-resources/giatips/MAUP.pdf"><em>Modifiable Areal Unit Problem</em></a>. A short essay introducing the MAUP.</li>
<li><span style="font-size: small;">Wong, D.&nbsp;<a href="http://books.google.com/books?hl=en&amp;lr=&amp;id=phEgXfbCU_YC&amp;oi=fnd&amp;pg=PA105&amp;dq=The+Modifiable+Areal+Unit+Problem+david+wong&amp;ots=JQbCE2ZCPr&amp;sig=AVE6XgdapJr9-jM2BPpxyfdvGKE#v=onepage&amp;q=The Modifiable Areal Unit Problem david wong&amp;f=false">The Modifiable Areal Unit Problem (MAUP)</a> (Links to a Google books preview). An introductory article about the MAUP from a geographer who has produced much contemporary work on this topic. The full chapter can be found in: A.S. Fotheringham and P.A. Rogerson (eds) <em><a href="http://www.worldcat.org/title/sage-handbook-of-spatial-analysis/oclc/85898184">The SAGE Handbook of Spatial Analysis</a></em>, London: Sage, pp. 105–123.</span></li>
</ul>
<ul>
<li>Openshaw S. 1984. <em>The Modifiable Areal Unit Problem</em>. Geobooks, Norwich, England. This seminal short book by one of the most well known authors on the topic is a great place to start your reading. Almost all works about the MAUP reference Openshaw. Out of print, but&nbsp;available&nbsp;for free on the internet <a href="http://qmrg.org.uk/files/2008/11/38-maup-openshaw.pdf">here</a>.</li>
<li>Fotheringham, A. S., and D.W.S. Wong. 1991. The modifiable areal unit problem in multivariate statistical analysis.&nbsp;<em>Environment and Planning A. </em>A classic article about dealing with the MAUP in statistics.</li>
<li>Taylor, C., S. Gorard, and J. Fitz. 2003. The modifiable areal unit problem: Segregation between schools and levels of analysis.&nbsp;<em>International Journal of Social Research Methodology&nbsp;</em>6(1): 41–60. A look at the MAUP using school segregation.</li>
<li>Dark, S. J., and D. Bram. 2007. The modifiable areal unit problem (MAUP) in physical geography.&nbsp;<em>Progress in Physical Geography&nbsp;</em>31(5): 471–479. A discussion of the MAUP in the natural sciences, an under-researched topic.</li>
<li>
<div>
<div>Grasland, C., and M. Madelin. 2006. “Modifiable Area Unit Problem: Final Report of ESPON Project 3.4.3.” The European Observation Network on Territorial Development and Cohesion conducted an <a href="http://www.espon.eu/export/sites/default/Documents/Projects/ESPON2006Projects/StudiesScientificSupportProjects/MAUP/espon343_maup_final_version2_nov_2006.pdf. ">in-depth report</a> about this issue, as it relates to territories within the EU. An interesting look at the issues that the MAUP can cause in the real world. A bit lengthy and technical.</div>
</div>
</li>
</ul>


[The Modifiable Areas Unit Problem - ESPON 3.4.3](http://www.espon.eu/export/sites/default/Documents/Projects/ESPON2006Projects/StudiesScientificSupportProjects/MAUP/espon343_maup_final_version2_nov_2006.pdf)  


