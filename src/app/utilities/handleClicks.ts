// utilities/handleClicks.ts

export class HandleClicks {
    private divRef: React.RefObject<HTMLDivElement>;
  
    constructor(divRef: React.RefObject<HTMLDivElement>) {
      this.divRef = divRef;
    }
  
    public handleBoldClick(): void {
      if (this.divRef.current) {
        console.log("Bold");
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);

            // Create a new span element with bold styling
            const span = document.createElement('span');
            span.style.fontWeight = 'bold';
        
            // Extract the selected content
            const selectedContent = range.extractContents();
        
            // Append the selected content to the span
            span.appendChild(selectedContent);
        
            // Insert the span back into the range's start position
            range.insertNode(span);
        
            // Restore the selection after inserting the bold text
            const newRange = document.createRange();
            newRange.setStartAfter(span);
            newRange.collapse(true);
            selection.removeAllRanges();
            selection.addRange(newRange);
        }
        //document.execCommand('bold', false, null);
      }
    }
  
    public handleItalicClick(): void {
      if (this.divRef.current) {
        //document.execCommand('italic', false, null);
        console.log(this.divRef.current.innerHTML);
      }
    }
  
    // Add more handlers as needed
  }