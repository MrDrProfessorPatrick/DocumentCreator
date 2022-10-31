import React, {useState, useRef} from 'react'
import { DocumentCreator } from './services/documentGenerator';
import { saveAs } from "file-saver";
import { Packer } from "docx";

export  function MainPage() {
  const companyRef = useRef<HTMLInputElement>(null)
    // const companyName = 'MAXIM LLC'
    const [companyName, setCompanyName] = useState();
    function generate(){
        const documentCreator = new DocumentCreator();
        const doc = documentCreator.create([companyName]);

        Packer.toBlob(doc).then(blob => {
            console.log(blob);
            saveAs(blob, "DocumentForCompany.docx");
            console.log("Document created successfully");
          });
    }
  return (
  <div>    

  <div>
    <label htmlFor="companyName">Let's submit some text</label>
    <input id="companyName" type="text" name="text" ref={companyRef} />
  </div>
  <p>Company name: {companyName}</p>
    <button onClick={(e)=>{
      
      setCompanyName(() :any=>{
        return companyRef.current?.value
    })
    console.log(companyRef.current?.value)
    }}> Add </button>


<p>
    Start editing to see some magic happen
    <button onClick={generate}>Generate company document</button>
</p>
</div>
  )
}
