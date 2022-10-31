import {
    AlignmentType,
    Document,
    HeadingLevel,
    Packer,
    Paragraph,
    TabStopPosition,
    TabStopType,
    TextRun
  } from "docx";

  export class DocumentCreator {
    public create([nameOfCompany]:any): Document { 
        const document = new Document({
            sections: [
                {
                    children:[
                        this.createTitleFirstLine(),
                        this.createTitleSecondLine(),
                        this.createTitleThirdLine(),
                        this.createTitleCompanyName(nameOfCompany),
                        this.createEmptyString(),
                        this.createFirstParagraph(nameOfCompany)
                    ]
                }
                ]})
      
          return document;

    }
    public createTitleFirstLine(
    
      ): Paragraph {
        return new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun({
              text: `ТОВАРИСТВО З`,
              bold:true,
              
            })
          ]
        });
      }

      public createTitleSecondLine(

      ): Paragraph {
        return new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun({
              text: `ОБМЕЖЕНОЮ `,
              bold:true,
              
            })
          ]
        });
      }
      public createTitleThirdLine(
      ): Paragraph {
        return new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun({
              text: `ВІДПОВІДАЛЬНІСТЮ `,
              bold:true,
              
            })
          ]
        });
      }
      public createTitleCompanyName(
        nameOfCompany:string
        ): Paragraph {
          return new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
              new TextRun({
                text: `${nameOfCompany} `,
                bold:true,
                
              })
            ]
          });
        }

        public createEmptyString(
          ): Paragraph {
            return new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun({
                  text: ' '
                  
                })
              ]
            });
          }

        

        public createFirstParagraph(
            nameOfCompany:string
            ): Paragraph {
              return new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({
                    text: ` 1.1. Інструкція з діловодства (далі — Інструкція) товариства з обмеженою відповідальністю «${nameOfCompany}» (далі — Товариство) встановлює загальні правила документування управлінської діяльності Товариства і регламентує порядок роботи з документами в Товаристві з моменту їх створення (надходження) до моменту відправлення або передавання в архів — незалежно від способу фіксації та відтворення інформації, що міститься в документах.
                    `,
                   
                    
                  })
                ]
              });
            }
   }
   