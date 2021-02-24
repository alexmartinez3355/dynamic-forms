import { Injectable } from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './questions-textbox';
import { of } from 'rxjs';

@Injectable()
export class QuestionService {

    // TODO: get from a remote source of question metadata
    getQuestions() {

        const questions: QuestionBase<string>[] = [

            
            new TextboxQuestion({
                key: 'Nombre completo',
                label: 'Ingresa tu nombre',
                placeholder: 'Ingresa tu nombre',
                size: 'col-sm-3',
                type: 'text',
                /* order: 1 */
            }),
            new TextboxQuestion({
                key: 'Apellido paterno',
                label: 'Ingresa tu apellido',
                size: 'col-sm-3',
                type: 'text',
                /* order: 2 */
            }),

            new TextboxQuestion({
                key: 'Nombre completo',
                label: 'Ingresa edad',
                size: 'col-sm-2',
                type: 'number',
                /* order: 3 */
            })
            
        ];

        return of(questions.sort((a, b) => a.order - b.order));
    }
}