import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  plogUrl="http://localhost:3050/loginProf";
  slogUrl="http://localhost:3050/loginStudent";
  alogUrl="http://localhost:3050/loginAdmin";

  allStud="http://localhost:3050/students";
  allProf="http://localhost:3050/profesors";

  oneStud="http://localhost:3050/student";
  oneProf="http://localhost:3050/professor";

  deleteStud="http://localhost:3050/studentD";
  deleteProf="http://localhost:3050/professorD";

  insertStud="http://localhost:3050/studentI";
  insertProf="http://localhost:3050/professorI";

  updateStud="http://localhost:3050/studentU";
  updateProf="http://localhost:3050/professorU";

  attendanceURL="http://localhost:3050/attendance";
  checkdateURL="http://localhost:3050/attendanceC";


  constructor(private http:HttpClient) { 

  }

  //Login Professor
  logIn(data:any):Observable<any>{
    return this.http.post(`${this.plogUrl}`,data);
  }

  //Login Professor
  logInS(data:any):Observable<any>{
    return this.http.post(`${this.slogUrl}`,data);
  }

  //Login Professor
  logInA(data:any):Observable<any>{
    return this.http.post(`${this.alogUrl}`,data);
  }


  //getting all student data
    getAllStudents():Observable<any>{
      return this.http.get(`${this.allStud}`);
    }

    //getting all professor data
    getAllprofessors():Observable<any>{
      return this.http.get(`${this.allProf}`);
    }

    //get Single stud
    getStudent(data:any):Observable<any>{
      return this.http.get(`${this.oneStud}/${data}`);
    }

    //get single Prof
    getProfessor(data:any):Observable<any>{
      return this.http.get(`${this.oneProf}/${data}`);
    }

    // delete stud
    deleteStudent(data:any):Observable<any>{
      return this.http.delete(`${this.deleteStud}/${data}`);
    }


    // delete prof
    deleteProfessor(data:any):Observable<any>{
      return this.http.delete(`${this.deleteProf}/${data}`);
    }


    // insert stud
    insertStudent(data:any):Observable<any>{
      return this.http.post(`${this.insertStud}`,data);
    }


    // insert prof
    insertProfessor(data:any):Observable<any>{
      return this.http.post(`${this.insertProf}`,data);
    }


    // update stud
    updateStudent(data:any):Observable<any>{
      return this.http.put(`${this.updateStud}`,data);
    }

    // update prof
    updateProfessor(data:any):Observable<any>{
      return this.http.put(`${this.updateProf}`,data);
    }

    //Give Attendance 
    attendance(data:any):Observable<any>{
      return this.http.post(`${this.attendanceURL}`,data);
    }

    checkDate(data:any):Observable<any>{
      return this.http.post(`${this.checkdateURL}`,data);
    }
    
  //--------------------------------------
    

  // // Get All Data Observe...
  // getAllUsers():Observable<any>{
  //   return this.http.get(`${this.apiUrl}`);
  // }

  // // Create Data
  // createData(data:any):Observable<any>{
  //   console.log(data,'Data Created.');
  //   return this.http.post(`${this.createUrl}`,data);
  // }

  // //Delete Data
  // deleteData(id:any):Observable<any>{
  //   return this.http.delete( `${this.deleteUrl}/${id}`);
  // }

  // updateData(data:any,id:any): Observable<any>{
  //   return this.http.put(`${this.createUrl}/${id}`,data);
  // }

  // getSingleData(id:any){
  //   return this.http.get(`${this.createUrl}/${id}`)
  // }

}
