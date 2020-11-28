import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentencecase'
})
export class SentencecasePipe implements PipeTransform {

  transform(str: string): string {
 const firstChars = str.charAt(0);
 const restChar = str.substring(1);
 const sentence = firstChars.toUpperCase() + restChar.toLowerCase();
 return sentence;
  }
  }


