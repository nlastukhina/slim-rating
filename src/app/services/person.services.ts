import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CollectionReference, DocumentData, addDoc, collection, deleteDoc, doc, updateDoc } from '@firebase/firestore';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';
import { IPerson } from '../models/person.model';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private slimCollection: CollectionReference<DocumentData>;

  constructor(private readonly firestore: Firestore) {
    this.slimCollection = collection(this.firestore, 'slim-rating');
  }

  percent = 0;
  person: IPerson[] = [];

  getPersons() {
    return collectionData(this.slimCollection, {
      idField: 'id',
    }) as Observable<IPerson[]>;
  }

  getPerson(id: string) {
    const personDocumentReference = doc(this.firestore, `slim-rating/${id}`);
    return docData(personDocumentReference, { idField: 'id' }) as Observable<IPerson>;
  }

  updatePerson(person: IPerson) {
    const personDocumentReference = doc(this.firestore, `slim-rating/${person.id}`);
    return updateDoc(personDocumentReference, { ...person });
  }
}
