<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    // Retrieve user contacts
    public function myContacts(){
        $contacts = Contact::get();
        return response()->json($contacts, 200);
        // dd($contacts);
    }

    // save contact
    public function store(Request $request){
        $validate = $request->validate([
            'firstName' => 'required|string|max:20',
            'lastName' => 'required|string|max:20',
            'preferredName' => 'required|string|max:20',
            'mobile1' => 'required|string|max:20',
            'mobile2' => 'nullable|string|max:20',
            'mobile3' => 'nullable|string|max:20|unique:contacts,mobile_1|unique:contacts,mobile_2',
            'email' => 'nullable|email',
            'website' => 'nullable|url',
        ]);
        // save data into database
        $contact = new Contact;
        $contact->first_name = $request->firstName;
        $contact->last_name = $request->lastName;
        $contact->preferred_name = $request->preferredName;
        $contact->mobile_1 = $request->mobile1;
        $contact->mobile_2 = $request->mobile2;
        $contact->mobile_3 = $request->mobile3;
        $contact->relationship = $request->relationship;
        $contact->email = $request->email;
        $contact->website = $request->website;
        $contact->occupation = $request->occupation;
        $contact->save();
        return response()->json('Contact Saved');
        
    }

    // update contact
    public function update(Request $request, $id){
        $validate = $request->validate([
            'firstName' => 'required|string|max:20',
            'lastName' => 'required|string|max:20',
            'preferredName' => 'required|string|max:20',
            'mobile1' => 'required|string|max:20',
            'mobile2' => 'nullable|string|max:20',
            'mobile3' => 'nullable|string|max:20',
            'email' => 'nullable|email',
            'website' => 'nullable|url',
        ]);
        // save data into database
        $contact = Contact::find($id);
        $contact->first_name = $request->firstName;
        $contact->last_name = $request->lastName;
        $contact->preferred_name = $request->preferredName;
        $contact->mobile_1 = $request->mobile1;
        $contact->mobile_2 = $request->mobile2;
        $contact->mobile_3 = $request->mobile3;
        $contact->relationship = $request->relationship;
        $contact->email = $request->email;
        $contact->website = $request->website;
        $contact->occupation = $request->occupation;
        $contact->update();
        return response()->json($contact);
    }   

    // delete or destroy contact
    public function deleteContact($id){
        $contact = Contact::where('id',$id)->delete();
        return response()->json($contact);
    }

    // show contact
    public function show($id){
        // $contact = Contact::where('id',$id)->get();
        $contact = Contact::findOrFail($id);
        // dd($id);
        return response()->json($contact);
    }

    // retrieve all contacts
    public function contacts($id){
        $contact = Contact::get();
    }
}
