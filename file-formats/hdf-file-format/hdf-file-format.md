

[Hierarchical Data Format (HDF)](https://eosweb.larc.nasa.gov/HBDOCS/hdf.html)  
[HDF Software Ecosystem](https://www.hdfgroup.org/software-ecosystem/)  
[Hierarchical Data Format - RIT Center for Imaging Science](https://www.cis.rit.edu/class/simg726/lectures/HDF/HDF_Lecture.pdf)  
[Hierarchical Data Format - Earth Observing System (HDF-EOS)](http://nsidc.org/data/hdfeos/index.html)  
[About: Hierarchical Data Formats - What is HDF5?](http://neondataskills.org/HDF5/About)  

The Hierarchical Data Format version 5 (HDF5), is an open source file format that supports large, complex, heterogeneous data. HDF5 uses a “file directory” like structure that allows you to organize data within the file in many different structured ways, as you might do with files on your computer. The HDF5 format also allows for embedding of metadata making it self-describing.  
Data Tip: HDF5 is one hierarchical data format, that builds upon both HDF4 and NetCDF (two other hierarchical data formats).
Hierarchical Structure - A file directory within a file  
The HDF5 format can be thought of as a file system contained and described within one single file. Think about the files and folders stored on your computer. You might have a data directory with some temperature data for multiple field sites. This temperature data is collected every minute and summarized on an hourly, daily and weekly basis. Within ONE HDF5 file, you can store a similar set of data organized in the same way that you might organize files and folders on your computer. However in a HDF5 file, what we call “directories” or “folders” on our computers, are called groups and what we call files on our computer are called datasets.  
2 Important HDF5 Terms  
    Group: A folder like element within an HDF5 file that might contain other groups OR datasets within it.  
    Dataset: The actual data contained within the HDF5 file. Datasets are often (but don’t have to be) stored within groups in the file.  

## HDF5 is a Self Describing Format  
HDF5 format is self describing. This means that each file, group and dataset can have associated metadata that describes exactly what the data are.   Following the example above, we can embed information about each site to the file, such as:  

    The full name and X,Y location of the site  
    Description of the site.  
    Any documentation of interest.  

Similarly, we might add information about how the data in the dataset were collected, such as descriptions of the sensor used to collect the temperature data. We can also attach information, to each dataset within the site group, about how the averaging was performed and over what time period data are available.  
One key benefit of having metadata that are attached to each file, group and dataset, is that this facilitates automation without the need for a separate (and additional) metadata document. Using a programming language, like R or Python, we can grab information from the metadata that are already associated with the dataset, and which we might need to process the dataset.  
## Open Format  
The HDF5 format is open and free to use. The supporting libraries (and a free viewer), can be downloaded from the HDF Group website. As such, HDF5 is widely supported in a host of programs, including open source programming languages like R and Python, and commercial programming tools like Matlab and IDL. Spatial data that are stored in HDF5 format can be used in GIS and imaging programs including QGIS, ArcGIS, and ENVI.
Summary Points - Benefits of HDF5  
    Self-Describing The datasets with an HDF5 file are self describing. This allows us to efficiently extract metadata without needing an additional metadata document.  
    Supporta Heterogeneous Data: Different types of datasets can be contained within one HDF5 file.  
    Supports Large, Complex Data: HDF5 is a compressed format that is designed to support large, heterogeneous, and complex datasets.  
    Supports Data Slicing: “Data slicing”, or extracting portions of the dataset as needed for analysis, means large files don’t need to be completely read into the computers memory or RAM.  
    Open Format - wide support in the many tools: Because the HDF5 format is open, it is supported by a host of programming languages and tools, including open source languages like R and Python and open GIS tools like QGIS.  

Hierarchical Data Format (HDF) is a set of file formats (HDF4, HDF5) designed to store and organize large amounts of data. Originally developed at the National Center for Supercomputing Applications, it is supported by The HDF Group, a non-profit corporation whose mission is to ensure continued development of HDF5 technologies and the continued accessibility of data stored in HDF.  
In keeping with this goal, the HDF libraries and associated tools are available under a liberal, BSD-like license for general use. HDF is supported by many commercial and non-commercial software platforms, including Java, MATLAB, Scilab, Octave, Mathematica, IDL, Python, R, and Julia. The freely available HDF distribution consists of the library, command-line utilities, test suite source, Java interface, and the Java-based HDF Viewer (HDFView).  
The current version, HDF5, differs significantly in design and API from the major legacy version HDF4.  
[Hierarchical Data Format - Wikipedia](https://en.wikipedia.org/wiki/Hierarchical_Data_Format)  

Filename extension 	.hdf, .h4, .hdf4, .he2, .h5, .hdf5, .he5



[HDF-EOS Document List](http://edhs1.gsfc.nasa.gov/cgi-bin2/texis/webinator/search?query=hdf-eos)  
HDF-EOS Document List contains information about HDF-EOS, extensions to HDF that include three geolocated data structures defined as the standard for Earth Observing System (EOS) data products.  

[Questions Tagged With "Hierarchical Data Format" on Data Science Stack Overflow](http://datascience.stackexchange.com/questions/tagged/hierarchical-data-format)  
[HDF5 --- Hierarchival Data Format Release 5 (HDF5) &#124; gdal.org](http://www.gdal.org/frmt_hdf5.html)  
[Working with Hierarchical Data Format (HDF5) Files ](http://matlab.izmiran.ru/help/techdoc/matlab_prog/ch_imp41.html)  
[Hierarchical Data Format - packtpub](https://www.packtpub.com/books/content/hierarchical-data-format)  

[The NCSA HDF Home Page via Wayback Machine](http://web.archive.org/web/20060113192359/http://hdf.ncsa.uiuc.edu/)  
Legacy site by the National Center for Supercomputing Applications (NCSA) via Wayback Machine, prior to moving to HDF Groups site.  



