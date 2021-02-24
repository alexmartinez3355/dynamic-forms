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
                type: 'text',
                order: 1
            }),
            new TextboxQuestion({
                key: 'Apellido paterno',
                label: 'Ingresa tu apellido',
                type: 'text',
                order: 3
            }),

            new TextboxQuestion({
                key: 'Nombre completo',
                label: 'Ingresa edad',
                type: 'number',
                order: 2
            })
            
        ];

        return of(questions.sort((a, b) => a.order - b.order));
    }
}