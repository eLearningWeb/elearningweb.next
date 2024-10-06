//const dropdownoptions = ['Exact match', 'Lines that start with'];
const RegexSearch=(searchWord:string, 
                    inputText:string, 
                    index:number)=>{

                        switch (index){
                            case 0:
                                   let pattern=`\\b${searchWord}\\b`;
                                const regex = new RegExp(pattern, 'gi');
                                    const matches = [...inputText.matchAll(regex)];
                                    console.log('matching');
                                    return matches;
                            default:
                                return [];
                        }

}

export {RegexSearch};