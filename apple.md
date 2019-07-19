# [Apple](https://apple.com/)  

## Apple Community  
[Mac Open Web](https://macopenweb.com/): a collection of open and indie Mac, iOS, and web apps that help promote the open web.  

## Sub Domains  
[Bug Report](https://bugreport.apple.com/web/)  

## Mac App Store  
### [Mac App Store Links](https://joshbuchea.com/mac-app-store-links/)  
*   Direct App Link: [macappstore://itunes.apple.com/app/id425424353](macappstore://itunes.apple.com/app/id425424353)
*   Featured Tab: [macappstore://](macappstore://)
*   Updates Tab: [macappstore://showUpdatesPage](macappstore://showUpdatesPage)
*   Purchased Tab: [macappstore://showPurchasesPage](macappstore://showPurchasesPage)
*   Search: [macappstore://search.itunes.apple.com/WebObjects/MZSearch.woa/wa/search?q=SEARCHTERM](macappstore://search.itunes.apple.com/WebObjects/MZSearch.woa/wa/search?q=SEARCHTERM)
*   Search (UTI): [macappstore://search.itunes.apple.com/WebObjects/MZSearch.woa/wa/docTypeLookup?uti=YOURUTI](macappstore://search.itunes.apple.com/WebObjects/MZSearch.woa/wa/docTypeLookup?uti=YOURUTI)
*   Search for apps that support a specific file extension: [macappstore://search.itunes.apple.com/WebObjects/MZSearch.woa/wa/docTypeLookup?extension=png](macappstore://search.itunes.apple.com/WebObjects/MZSearch.woa/wa/docTypeLookup?extension=png)
**Note:** Mac App Store links can also be called from the command line (works without root privileges): `open macappstore://showUpdatesPage`

## Snippets  
[See Hidden Files/Folders](https://appleinsider.com/articles/18/07/27/how-to-see-hidden-files-and-folders-in-macos)  
`defaults write com.apple.finder AppleShowAllFiles true; killall Finder`  
OR  
`defaults write com.apple.finder AppleShowAllFiles YES`

## <code>.ssh</code> Config  
To view all hidden files/folders, type: <pre><code>ls -la</code></pre>.  
[Generating a New <code>.ssh</code> Key Config for GitHub](https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key)  

## View Hidden Files (MORE)  
Press <code>command</code>+<code>shift</code>+<code>.</code> to view hidden files and folders from Mac OS X Finder prompt.  

## Change Screenshots Directory  
Create directory that you want screenshots to be in; make sure you can see this directory in finder and that it is in grid view.  
From terminal, enter <code>defaults write com.apple.screencapture location </code>.  
**Note**: make sure you enter the above line with the trailing space!  
Drag the desired directory from Finder into terminal to get the directory's complete path; hit enter.  
[Change Mac's Default Screenshot Directory](https://www.laptopmag.com/articles/change-macs-default-screenshot-directory)  
