# Limerick-Machine
a simple coding project that involves working with arrays
  I wanted a simple toy that would create a mashup of a poem built from different limericks. For assets, I pulled a list of limericks from http://www.thehypertexts.com/The%20Best%20Limericks%20of%20All%20Time.htm and sorted some verses by rhyme.
  
  I figured I could stow the A verses and B verses in  a couple of two dimensional arrarys, then first select an arrary by rhyme scheme, then pick random verses to populate the poem. 
  
  There was an unexpected challenge keeping the same verse from being repeated in the poem. It was easy to select entries at random with the getRhymes() function. And it's in the code now as the selector for the per rhyme arrays. I couldn't figure out how to select a string from an array, then remove it while keeping the same array usable with getRhymes. I found a workaround by scrambling the elements in the array itself, then using javascript's shift() to yank entries off the front. Randomized, nonrepeating selections, resuable array.
  
   I opted to keep copying and pasting the code for each line of poetry because
     a.) Limericks are only 5 lines long, and is not a format that requires scaling
     b.) I wanted to make global changes to the array, 
     
 As of this iteration, the page has to be reloaded to reset and get a new limerick. This might be a user experience issue if someone expects a new output every time they hit the button. 
