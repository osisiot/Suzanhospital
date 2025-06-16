import React, { useState, useEffect } from 'react';
import { 
  Users, Calendar, FileText, Pill, FlaskConical, Bed, 
  Package, Settings, LogOut, Plus, Search, Edit, Trash2,
  User, Phone, Mail, MapPin, Clock, Activity, DollarSign,
  Shield, UserPlus, Eye, Save, X, CheckCircle, AlertCircle,
  Stethoscope, CreditCard, TrendingUp, Download, Filter,
  Printer, Heart, Thermometer, Weight, Clipboard, Syringe,
  Hospital, UserCheck, Timer, BarChart3, FileSpreadsheet,
  AlertTriangle, Zap, Scissors, CalendarClock, Wrench,
  Bell, MessageSquare, Upload, Monitor, Target, Archive,
  Wifi, Database, Lock, Globe, PieChart, LineChart
} from 'lucide-react';

// Initial data structure
const initialData = {
  users: [
    { id: 1, username: 'admin', password: 'admin123', role: 'admin', name: 'System Administrator', email: 'admin@suzanhospital.com', active: true },
    { id: 2, username: 'dr.smith', password: 'doc123', role: 'doctor', name: 'Dr. John Smith', email: 'john.smith@suzanhospital.com', specialization: 'Cardiology', active: true },
    { id: 3, username: 'nurse.jane', password: 'nurse123', role: 'nurse', name: 'Jane Wilson', email: 'jane.wilson@suzanhospital.com', department: 'ICU', active: true },
    { id: 4, username: 'lab.tech', password: 'lab123', role: 'lab_tech', name: 'Mike Johnson', email: 'mike.johnson@suzanhospital.com', department: 'Laboratory', active: true },
    { id: 5, username: 'pharmacist', password: 'pharm123', role: 'pharmacist', name: 'Sarah Davis', email: 'sarah.davis@suzanhospital.com', department: 'Pharmacy', active: true }
  ],
  patients: [
    { 
      id: 'P001', name: 'Alice Johnson', age: 34, gender: 'Female', phone: '+1-555-0101', 
      email: 'alice.j@email.com', address: '123 Main St, City', emergencyContact: '+1-555-0102',
      bloodType: 'A+', allergies: 'Penicillin', chronicIllnesses: 'Diabetes Type 2',
      registrationDate: '2024-01-15', lastVisit: '2024-06-10', insurance: 'Blue Cross', policyNumber: 'BC123456'
    },
    { 
      id: 'P002', name: 'Robert Brown', age: 45, gender: 'Male', phone: '+1-555-0201',
      email: 'robert.b@email.com', address: '456 Oak Ave, City', emergencyContact: '+1-555-0202',
      bloodType: 'O-', allergies: 'None', chronicIllnesses: 'Hypertension',
      registrationDate: '2024-02-20', lastVisit: '2024-06-12', insurance: 'Aetna', policyNumber: 'AE789012'
    },
    { 
      id: 'P003', name: 'Maria Garcia', age: 28, gender: 'Female', phone: '+1-555-0301',
      email: 'maria.g@email.com', address: '789 Pine St, City', emergencyContact: '+1-555-0302',
      bloodType: 'B+', allergies: 'Shellfish', chronicIllnesses: 'None',
      registrationDate: '2024-03-10', lastVisit: '2024-06-15', insurance: 'United Health', policyNumber: 'UH345678'
    }
  ],
  appointments: [
    { 
      id: 'A001', patientId: 'P001', patientName: 'Alice Johnson', doctorId: 2, doctorName: 'Dr. John Smith',
      date: '2024-06-17', time: '10:00', type: 'Regular Checkup', status: 'Scheduled', notes: 'Routine diabetes follow-up'
    },
    { 
      id: 'A002', patientId: 'P002', patientName: 'Robert Brown', doctorId: 2, doctorName: 'Dr. John Smith',
      date: '2024-06-17', time: '14:30', type: 'Consultation', status: 'Scheduled', notes: 'Blood pressure monitoring'
    },
    { 
      id: 'A003', patientId: 'P003', patientName: 'Maria Garcia', doctorId: 2, doctorName: 'Dr. John Smith',
      date: '2024-06-18', time: '09:00', type: 'Follow-up', status: 'Scheduled', notes: 'Post-treatment checkup'
    }
  ],
  medications: [
    { id: 'M001', name: 'Metformin 500mg', category: 'Diabetes', stock: 150, price: 12.50, expiryDate: '2025-12-31', supplier: 'PharmaCorp', batchNumber: 'MET2024001' },
    { id: 'M002', name: 'Lisinopril 10mg', category: 'Hypertension', stock: 200, price: 8.75, expiryDate: '2025-10-15', supplier: 'MediSupply', batchNumber: 'LIS2024002' },
    { id: 'M003', name: 'Amoxicillin 250mg', category: 'Antibiotic', stock: 75, price: 15.00, expiryDate: '2025-08-20', supplier: 'PharmaCorp', batchNumber: 'AMX2024003' },
    { id: 'M004', name: 'Ibuprofen 400mg', category: 'Pain Relief', stock: 300, price: 6.25, expiryDate: '2026-01-30', supplier: 'GenericMeds', batchNumber: 'IBU2024004' },
    { id: 'M005', name: 'Aspirin 81mg', category: 'Cardiology', stock: 250, price: 4.50, expiryDate: '2025-11-15', supplier: 'HeartCare', batchNumber: 'ASP2024005' }
  ],
  medicalRecords: [
    {
      id: 'MR001', patientId: 'P001', date: '2024-06-10', doctorId: 2, doctorName: 'Dr. John Smith',
      diagnosis: 'Type 2 Diabetes - Well Controlled', treatment: 'Continue Metformin, dietary counseling',
      vitals: { bp: '120/80', pulse: '72', temp: '98.6°F', weight: '145 lbs', height: '5\'4"', oxygen: '98%' },
      prescriptions: [{ medication: 'Metformin 500mg', dosage: '2x daily', duration: '30 days' }], 
      notes: 'Patient responding well to treatment. Continue current regimen.',
      symptoms: 'None reported', allergies: 'Penicillin', followUpDate: '2024-09-10'
    },
    {
      id: 'MR002', patientId: 'P002', date: '2024-06-12', doctorId: 2, doctorName: 'Dr. John Smith',
      diagnosis: 'Hypertension - Stage 1', treatment: 'Lisinopril, lifestyle modifications',
      vitals: { bp: '140/90', pulse: '78', temp: '98.2°F', weight: '180 lbs', height: '5\'10"', oxygen: '97%' },
      prescriptions: [{ medication: 'Lisinopril 10mg', dosage: '1x daily', duration: '30 days' }],
      notes: 'Blood pressure elevated. Started on ACE inhibitor.',
      symptoms: 'Occasional headaches', allergies: 'None', followUpDate: '2024-07-12'
    }
  ],
  labTests: [
    {
      id: 'LT001', patientId: 'P001', patientName: 'Alice Johnson', testType: 'Blood Glucose', 
      requestDate: '2024-06-10', collectionDate: '2024-06-10', resultDate: '2024-06-10',
      status: 'Completed', results: { value: '110 mg/dL', range: '70-140 mg/dL', status: 'Normal' },
      technician: 'Mike Johnson', doctor: 'Dr. John Smith', cost: 25.00
    },
    {
      id: 'LT002', patientId: 'P002', patientName: 'Robert Brown', testType: 'Lipid Panel',
      requestDate: '2024-06-12', collectionDate: '2024-06-12', resultDate: '2024-06-13',
      status: 'Completed', results: { 
        cholesterol: '220 mg/dL (High)', 
        hdl: '45 mg/dL (Low)', 
        ldl: '150 mg/dL (Borderline High)',
        triglycerides: '180 mg/dL (Borderline High)'
      },
      technician: 'Mike Johnson', doctor: 'Dr. John Smith', cost: 85.00
    },
    {
      id: 'LT003', patientId: 'P003', patientName: 'Maria Garcia', testType: 'Complete Blood Count',
      requestDate: '2024-06-15', collectionDate: '2024-06-15', resultDate: null,
      status: 'Processing', results: null,
      technician: 'Mike Johnson', doctor: 'Dr. John Smith', cost: 45.00
    }
  ],
  billing: [
    {
      id: 'B001', patientId: 'P001', patientName: 'Alice Johnson', date: '2024-06-10',
      services: [
        { description: 'Consultation - Endocrinology', amount: 150.00 },
        { description: 'Blood Glucose Test', amount: 25.00 }
      ],
      subtotal: 175.00, tax: 8.75, discount: 0, total: 183.75,
      paymentStatus: 'Paid', paymentMethod: 'Insurance + Cash', insurance: 'Blue Cross'
    },
    {
      id: 'B002', patientId: 'P002', patientName: 'Robert Brown', date: '2024-06-12',
      services: [
        { description: 'Consultation - Cardiology', amount: 200.00 },
        { description: 'Lipid Panel', amount: 85.00 },
        { description: 'ECG', amount: 75.00 }
      ],
      subtotal: 360.00, tax: 18.00, discount: 36.00, total: 342.00,
      paymentStatus: 'Pending', paymentMethod: 'Insurance', insurance: 'Aetna'
    }
  ],
  inventory: [
    { id: 'I001', name: 'Disposable Syringes 5ml', category: 'Medical Supplies', stock: 500, minStock: 100, price: 0.50, supplier: 'MedSupplies Inc' },
    { id: 'I002', name: 'Surgical Gloves (Box of 100)', category: 'Medical Supplies', stock: 25, minStock: 10, price: 12.00, supplier: 'SafeHands Co' },
    { id: 'I003', name: 'Blood Pressure Monitor', category: 'Equipment', stock: 8, minStock: 3, price: 85.00, supplier: 'MedTech Solutions' },
    { id: 'I004', name: 'Stethoscope', category: 'Equipment', stock: 12, minStock: 5, price: 45.00, supplier: 'MedTech Solutions' },
    { id: 'I005', name: 'Bandages (Pack of 20)', category: 'Medical Supplies', stock: 150, minStock: 50, price: 8.50, supplier: 'WoundCare Plus' }
  ],
  inPatients: [
    {
      id: 'IP001', patientId: 'P001', patientName: 'Alice Johnson', 
      admissionDate: '2024-06-14', dischargeDate: null, roomNumber: '301A', bedNumber: '1',
      department: 'Internal Medicine', attendingDoctor: 'Dr. John Smith', status: 'Admitted',
      condition: 'Stable', notes: 'Monitoring blood sugar levels'
    }
  ],
  queue: [
    {
      id: 'Q001', patientId: 'P001', patientName: 'Alice Johnson', tokenNumber: 'A001',
      department: 'Cardiology', doctorName: 'Dr. John Smith', appointmentTime: '10:00',
      arrivalTime: '09:45', status: 'Waiting', estimatedWaitTime: 15, priority: 'Normal'
    },
    {
      id: 'Q002', patientId: 'P002', patientName: 'Robert Brown', tokenNumber: 'A002',
      department: 'Cardiology', doctorName: 'Dr. John Smith', appointmentTime: '10:30',
      arrivalTime: '10:15', status: 'In Progress', estimatedWaitTime: 0, priority: 'Normal'
    },
    {
      id: 'Q003', patientId: 'P003', patientName: 'Maria Garcia', tokenNumber: 'E001',
      department: 'Emergency', doctorName: 'Dr. John Smith', appointmentTime: 'Walk-in',
      arrivalTime: '11:30', status: 'Waiting', estimatedWaitTime: 5, priority: 'High'
    }
  ],
  emergency: [
    {
      id: 'ER001', patientId: 'P003', patientName: 'Maria Garcia', age: 28,
      arrivalTime: '2024-06-17 11:30', chiefComplaint: 'Chest pain and shortness of breath',
      triageLevel: 2, triageColor: 'Orange', assignedNurse: 'Jane Wilson',
      assignedDoctor: 'Dr. John Smith', status: 'Under Treatment', bedNumber: 'ER-3',
      vitals: { bp: '160/95', pulse: '105', temp: '100.2°F', oxygen: '94%', pain: '7/10' },
      allergies: 'Shellfish', medications: 'None', notes: 'Patient reports sudden onset chest pain'
    },
    {
      id: 'ER002', patientId: 'P002', patientName: 'Robert Brown', age: 45,
      arrivalTime: '2024-06-17 09:15', chiefComplaint: 'Severe headache with dizziness',
      triageLevel: 3, triageColor: 'Yellow', assignedNurse: 'Jane Wilson',
      assignedDoctor: 'Dr. John Smith', status: 'Waiting for Tests', bedNumber: 'ER-1',
      vitals: { bp: '180/100', pulse: '88', temp: '98.9°F', oxygen: '98%', pain: '8/10' },
      allergies: 'None', medications: 'Lisinopril', notes: 'Hypertensive crisis, monitoring required'
    }
  ],
  surgeries: [
    {
      id: 'SUR001', patientId: 'P001', patientName: 'Alice Johnson',
      surgeryType: 'Appendectomy', department: 'General Surgery',
      scheduledDate: '2024-06-18', scheduledTime: '14:00', duration: 120,
      surgeon: 'Dr. John Smith', assistantSurgeon: 'Dr. Sarah Davis',
      anesthesiologist: 'Dr. Mike Johnson', operatingRoom: 'OR-1',
      status: 'Scheduled', priority: 'Elective', notes: 'Routine appendectomy',
      preOpNotes: 'Patient fasted, consent obtained', postOpNotes: null
    },
    {
      id: 'SUR002', patientId: 'P002', patientName: 'Robert Brown',
      surgeryType: 'Cardiac Catheterization', department: 'Cardiology',
      scheduledDate: '2024-06-17', scheduledTime: '16:30', duration: 90,
      surgeon: 'Dr. John Smith', assistantSurgeon: null,
      anesthesiologist: 'Dr. Mike Johnson', operatingRoom: 'CATH-1',
      status: 'In Progress', priority: 'Urgent', notes: 'Coronary angiography',
      preOpNotes: 'Patient stable, premedicated', postOpNotes: null
    }
  ],
  staffSchedules: [
    {
      id: 'SCH001', staffId: 2, staffName: 'Dr. John Smith', role: 'doctor',
      date: '2024-06-17', shiftType: 'Day', startTime: '08:00', endTime: '18:00',
      department: 'Cardiology', status: 'Active', notes: 'Regular day shift',
      breaks: [{ start: '12:00', end: '13:00', type: 'Lunch' }]
    },
    {
      id: 'SCH002', staffId: 3, staffName: 'Jane Wilson', role: 'nurse',
      date: '2024-06-17', shiftType: 'Day', startTime: '07:00', endTime: '19:00',
      department: 'ICU', status: 'Active', notes: '12-hour shift',
      breaks: [{ start: '11:00', end: '11:30', type: 'Break' }, { start: '15:00', end: '16:00', type: 'Lunch' }]
    },
    {
      id: 'SCH003', staffId: 4, staffName: 'Mike Johnson', role: 'lab_tech',
      date: '2024-06-17', shiftType: 'Night', startTime: '22:00', endTime: '06:00',
      department: 'Laboratory', status: 'Scheduled', notes: 'Night shift coverage',
      breaks: [{ start: '02:00', end: '02:30', type: 'Break' }]
    }
  ],
  equipment: [
    {
      id: 'EQ001', name: 'X-Ray Machine Model XR-500', category: 'Imaging',
      location: 'Radiology Department', status: 'Operational', lastMaintenance: '2024-05-15',
      nextMaintenance: '2024-08-15', warranty: '2025-12-31', cost: 125000,
      manufacturer: 'MedTech Systems', model: 'XR-500', serialNumber: 'XR500-2023-001',
      maintenanceNotes: 'Regular calibration completed'
    },
    {
      id: 'EQ002', name: 'MRI Scanner 3T', category: 'Imaging',
      location: 'Radiology Department', status: 'Maintenance Required', lastMaintenance: '2024-04-10',
      nextMaintenance: '2024-06-20', warranty: '2026-03-15', cost: 850000,
      manufacturer: 'Advanced Imaging Corp', model: 'MRI-3T-Pro', serialNumber: 'MRI3T-2022-005',
      maintenanceNotes: 'Cooling system needs inspection'
    },
    {
      id: 'EQ003', name: 'Patient Monitor PM-200', category: 'Monitoring',
      location: 'ICU Room 301', status: 'Operational', lastMaintenance: '2024-06-01',
      nextMaintenance: '2024-09-01', warranty: '2025-06-30', cost: 8500,
      manufacturer: 'VitalCare Systems', model: 'PM-200', serialNumber: 'PM200-2023-078',
      maintenanceNotes: 'All sensors calibrated and functioning'
    }
  ],
  auditLogs: [
    {
      id: 'LOG001', userId: 1, userName: 'System Administrator', action: 'User Login',
      timestamp: '2024-06-17 08:00:00', ipAddress: '192.168.1.100',
      details: 'Successful login', module: 'Authentication', severity: 'Info'
    },
    {
      id: 'LOG002', userId: 2, userName: 'Dr. John Smith', action: 'Patient Record Updated',
      timestamp: '2024-06-17 10:30:00', ipAddress: '192.168.1.105',
      details: 'Updated medical record for patient P001', module: 'Medical Records', severity: 'Info'
    },
    {
      id: 'LOG003', userId: 3, userName: 'Jane Wilson', action: 'Medication Dispensed',
      timestamp: '2024-06-17 11:15:00', ipAddress: '192.168.1.110',
      details: 'Dispensed Metformin 500mg to patient P001', module: 'Pharmacy', severity: 'Info'
    },
    {
      id: 'LOG004', userId: 1, userName: 'System Administrator', action: 'Low Stock Alert',
      timestamp: '2024-06-17 12:00:00', ipAddress: 'System',
      details: 'Amoxicillin 250mg stock below minimum threshold', module: 'Inventory', severity: 'Warning'
    }
  ],
  systemSettings: {
    hospitalName: 'Suzan Hospital',
    hospitalAddress: '123 Healthcare Avenue, Medical City',
    hospitalPhone: '+1-555-HOSPITAL',
    hospitalEmail: 'info@suzanhospital.com',
    timezone: 'America/New_York',
    currency: 'USD',
    language: 'English',
    emergencyContact: '+1-555-EMERGENCY',
    backupSchedule: 'Daily at 2:00 AM',
    sessionTimeout: 30,
    passwordPolicy: {
      minLength: 8,
      requireUppercase: true,
      requireNumbers: true,
      requireSpecialChars: false
    },
    notifications: {
      lowStockThreshold: 50,
      appointmentReminders: true,
      emailNotifications: true,
      smsNotifications: false
    }
  }
};

const HospitalManagementSystem = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [activeModule, setActiveModule] = useState('dashboard');
  const [data, setData] = useState(initialData);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [editingItem, setEditingItem] = useState(null);
  const [viewingItem, setViewingItem] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'warning', message: 'Low stock alert: Amoxicillin 250mg (75 units remaining)', time: '2 minutes ago' },
    { id: 2, type: 'info', message: 'New lab result available for Alice Johnson', time: '15 minutes ago' },
    { id: 3, type: 'success', message: 'Patient Robert Brown discharged successfully', time: '1 hour ago' }
  ]);

  // Handle view operations
  const handleView = (item, type) => {
    setViewingItem(item);
    setModalType(type + '-view');
    setShowViewModal(true);
  };

  // Handle delete operations
  const handleDelete = (id, type) => {
    if (window.confirm(`Are you sure you want to delete this ${type}?`)) {
      switch(type) {
        case 'patient':
          setData(prev => ({
            ...prev,
            patients: prev.patients.filter(p => p.id !== id)
          }));
          break;
        case 'user':
          setData(prev => ({
            ...prev,
            users: prev.users.filter(u => u.id !== id)
          }));
          break;
        case 'appointment':
          setData(prev => ({
            ...prev,
            appointments: prev.appointments.filter(a => a.id !== id)
          }));
          break;
        case 'medical-record':
          setData(prev => ({
            ...prev,
            medicalRecords: prev.medicalRecords.filter(mr => mr.id !== id)
          }));
          break;
        case 'medication':
          setData(prev => ({
            ...prev,
            medications: prev.medications.filter(m => m.id !== id)
          }));
          break;
        case 'lab-test':
          setData(prev => ({
            ...prev,
            labTests: prev.labTests.filter(lt => lt.id !== id)
          }));
          break;
        case 'inventory':
          setData(prev => ({
            ...prev,
            inventory: prev.inventory.filter(i => i.id !== id)
          }));
          break;
        case 'in-patient':
          setData(prev => ({
            ...prev,
            inPatients: prev.inPatients.filter(ip => ip.id !== id)
          }));
          break;
        case 'bill':
          setData(prev => ({
            ...prev,
            billing: prev.billing.filter(b => b.id !== id)
          }));
          break;
        case 'queue':
          setData(prev => ({
            ...prev,
            queue: prev.queue.filter(q => q.id !== id)
          }));
          break;
        case 'emergency':
          setData(prev => ({
            ...prev,
            emergency: prev.emergency.filter(e => e.id !== id)
          }));
          break;
        case 'surgery':
          setData(prev => ({
            ...prev,
            surgeries: prev.surgeries.filter(s => s.id !== id)
          }));
          break;
        case 'equipment':
          setData(prev => ({
            ...prev,
            equipment: prev.equipment.filter(e => e.id !== id)
          }));
          break;
        default:
          break;
      }
    }
  };

  // Clear search when switching modules
  useEffect(() => {
    setSearchTerm('');
  }, [activeModule]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
          case 'k':
            e.preventDefault();
            // Focus search input if available
            const searchInput = document.querySelector('input[type="text"][placeholder*="Search"]');
            if (searchInput) searchInput.focus();
            break;
          case 'n':
            e.preventDefault();
            // Open new item modal based on current module
            if (activeModule === 'patients') {
              setModalType('patient');
              setEditingItem(null);
              setShowModal(true);
            } else if (activeModule === 'appointments') {
              setModalType('appointment');
              setEditingItem(null);
              setShowModal(true);
            }
            break;
          default:
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [activeModule]);

  // Login Component
  const LoginForm = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    const handleLogin = () => {
      const user = data.users.find(u => 
        u.username === credentials.username && 
        u.password === credentials.password && 
        u.active
      );
      
      if (user) {
        setCurrentUser(user);
        setError('');
      } else {
        setError('Invalid credentials or inactive account');
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-96">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
              <Activity className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Suzan Hospital</h1>
            <p className="text-gray-600">Management System</p>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
              <input
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your username"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your password"
                required
              />
            </div>
            
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}
            
            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-200 font-medium"
            >
              Sign In
            </button>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-600 mb-2">Demo Accounts:</p>
            <div className="text-xs space-y-1">
              <div>Admin: admin / admin123</div>
              <div>Doctor: dr.smith / doc123</div>
              <div>Nurse: nurse.jane / nurse123</div>
              <div>Lab Tech: lab.tech / lab123</div>
              <div>Pharmacist: pharmacist / pharm123</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Navigation Menu
  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Activity, roles: ['admin', 'doctor', 'nurse', 'lab_tech', 'pharmacist'] },
    { id: 'patients', label: 'Patients', icon: Users, roles: ['admin', 'doctor', 'nurse'] },
    { id: 'appointments', label: 'Appointments', icon: Calendar, roles: ['admin', 'doctor', 'nurse'] },
    { id: 'queue', label: 'Queue Management', icon: Timer, roles: ['admin', 'doctor', 'nurse'] },
    { id: 'emergency', label: 'Emergency Dept', icon: AlertTriangle, roles: ['admin', 'doctor', 'nurse'] },
    { id: 'medical-records', label: 'Medical Records', icon: FileText, roles: ['admin', 'doctor', 'nurse'] },
    { id: 'surgery', label: 'Surgery Scheduling', icon: Scissors, roles: ['admin', 'doctor', 'nurse'] },
    { id: 'pharmacy', label: 'Pharmacy', icon: Pill, roles: ['admin', 'doctor', 'nurse', 'pharmacist'] },
    { id: 'laboratory', label: 'Laboratory', icon: FlaskConical, roles: ['admin', 'doctor', 'nurse', 'lab_tech'] },
    { id: 'billing', label: 'Billing & Finance', icon: CreditCard, roles: ['admin', 'doctor', 'nurse'] },
    { id: 'inventory', label: 'Inventory', icon: Package, roles: ['admin', 'nurse', 'pharmacist'] },
    { id: 'in-patients', label: 'In-Patients', icon: Bed, roles: ['admin', 'doctor', 'nurse'] },
    { id: 'staff-schedule', label: 'Staff Scheduling', icon: CalendarClock, roles: ['admin', 'nurse'] },
    { id: 'equipment', label: 'Equipment', icon: Wrench, roles: ['admin', 'nurse'] },
    { id: 'reports', label: 'Reports & Analytics', icon: BarChart3, roles: ['admin', 'doctor'] },
    { id: 'audit-logs', label: 'Audit Logs', icon: Archive, roles: ['admin'] },
    { id: 'settings', label: 'System Settings', icon: Settings, roles: ['admin'] },
    { id: 'users', label: 'User Management', icon: Shield, roles: ['admin'] },
  ];

  const Navigation = () => (
    <nav className="bg-white shadow-lg h-screen w-64 fixed left-0 top-0 overflow-y-auto">
      <div className="p-6 border-b">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Activity className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Suzan Hospital</h1>
            <p className="text-xs text-gray-500">Management System</p>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-6">
          <div className="bg-blue-50 rounded-lg p-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{currentUser.name}</p>
                <p className="text-xs text-gray-500 capitalize">{currentUser.role.replace('_', ' ')}</p>
              </div>
            </div>
          </div>
        </div>
        
        <ul className="space-y-2">
          {navigationItems
            .filter(item => item.roles.includes(currentUser.role))
            .map(item => (
            <li key={item.id}>
              <button
                onClick={() => setActiveModule(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition duration-200 ${
                  activeModule === item.id 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="absolute bottom-0 w-full p-4 border-t">
        <button
          onClick={() => setCurrentUser(null)}
          className="w-full flex items-center space-x-3 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition duration-200"
        >
          <LogOut className="h-5 w-5" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </nav>
  );

  // Dashboard Component
  const Dashboard = () => {
    const stats = [
      { label: 'Total Patients', value: data.patients.length, icon: Users, color: 'blue' },
      { label: 'Today\'s Appointments', value: data.appointments.filter(a => a.date === '2024-06-17').length, icon: Calendar, color: 'green' },
      { label: 'In-Patients', value: data.inPatients.filter(ip => !ip.dischargeDate).length, icon: Bed, color: 'red' },
      { label: 'Pending Lab Tests', value: data.labTests.filter(lt => lt.status === 'Processing').length, icon: FlaskConical, color: 'yellow' },
      { label: 'Active Users', value: data.users.filter(u => u.active).length, icon: Shield, color: 'purple' },
      { label: 'Low Stock Items', value: data.medications.filter(m => m.stock < 100).length + data.inventory.filter(i => i.stock <= i.minStock).length, icon: AlertCircle, color: 'orange' },
      { label: 'Pending Bills', value: data.billing.filter(b => b.paymentStatus === 'Pending').length, icon: CreditCard, color: 'indigo' },
      { label: 'Total Revenue (Today)', value: `${data.billing.filter(b => b.date === '2024-06-10').reduce((sum, bill) => sum + bill.total, 0).toFixed(2)}`, icon: DollarSign, color: 'emerald' }
    ];

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
          <div className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleString()}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                  <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Appointments</h3>
            <div className="space-y-3">
              {data.appointments.filter(a => a.date === '2024-06-17').slice(0, 5).map(appointment => (
                <div key={appointment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{appointment.patientName}</p>
                    <p className="text-sm text-gray-600">{appointment.time} - {appointment.type}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    appointment.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {appointment.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Critical Alerts</h3>
            <div className="space-y-3">
              {data.medications.filter(med => med.stock < 100).map(medication => (
                <div key={medication.id} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <div>
                    <p className="font-medium text-gray-900">{medication.name}</p>
                    <p className="text-sm text-gray-600">Stock: {medication.stock} units</p>
                  </div>
                  <AlertCircle className="h-5 w-5 text-orange-500" />
                </div>
              ))}
              {data.inventory.filter(item => item.stock <= item.minStock).slice(0, 2).map(item => (
                <div key={item.id} className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                  <div>
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-600">Stock: {item.stock} (Min: {item.minStock})</p>
                  </div>
                  <AlertCircle className="h-5 w-5 text-red-500" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Lab Results</h3>
            <div className="space-y-3">
              {data.labTests.filter(test => test.status === 'Completed').slice(0, 4).map(test => (
                <div key={test.id} className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                  <div>
                    <p className="font-medium text-gray-900">{test.patientName}</p>
                    <p className="text-sm text-gray-600">{test.testType}</p>
                  </div>
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Patient Management Component
  const PatientManagement = () => {
    const filteredPatients = data.patients.filter(patient =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddPatient = () => {
      setModalType('patient');
      setEditingItem(null);
      setShowModal(true);
    };

    const handleEditPatient = (patient) => {
      setModalType('patient');
      setEditingItem(patient);
      setShowModal(true);
    };

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Patient Management</h2>
          <button
            onClick={handleAddPatient}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
          >
            <Plus className="h-4 w-4" />
            <span>Add Patient</span>
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search patients by name or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Medical Info</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Visit</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPatients.map(patient => (
                  <tr key={patient.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                        <div className="text-sm text-gray-500">ID: {patient.id} • {patient.age}y • {patient.gender}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{patient.phone}</div>
                      <div className="text-sm text-gray-500">{patient.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">Blood Type: {patient.bloodType}</div>
                      <div className="text-sm text-gray-500">Allergies: {patient.allergies}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {patient.lastVisit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditPatient(patient)}
                          className="text-blue-600 hover:text-blue-900"
                          title="Edit Patient"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleView(patient, 'patient')}
                          className="text-green-600 hover:text-green-900"
                          title="View Details"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(patient.id, 'patient')}
                          className="text-red-600 hover:text-red-900"
                          title="Delete Patient"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  // Appointment Management Component
  const AppointmentManagement = () => {
    const filteredAppointments = data.appointments.filter(appointment =>
      appointment.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.doctorName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Appointment Management</h2>
          <button
            onClick={() => {
              setModalType('appointment');
              setEditingItem(null);
              setShowModal(true);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
          >
            <Plus className="h-4 w-4" />
            <span>Schedule Appointment</span>
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search appointments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredAppointments.map(appointment => (
                  <tr key={appointment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{appointment.patientName}</div>
                      <div className="text-sm text-gray-500">ID: {appointment.patientId}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {appointment.doctorName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{appointment.date}</div>
                      <div className="text-sm text-gray-500">{appointment.time}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {appointment.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        appointment.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' : 
                        appointment.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {appointment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => {
                            setModalType('appointment');
                            setEditingItem(appointment);
                            setShowModal(true);
                          }}
                          className="text-blue-600 hover:text-blue-900"
                          title="Edit Appointment"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleView(appointment, 'appointment')}
                          className="text-green-600 hover:text-green-900"
                          title="View Details"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(appointment.id, 'appointment')}
                          className="text-red-600 hover:text-red-900"
                          title="Delete Appointment"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  // Medical Records Management Component
  const MedicalRecordsManagement = () => {
    const filteredRecords = data.medicalRecords.filter(record =>
      record.patientName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.diagnosis?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.patients.find(p => p.id === record.patientId)?.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Medical Records</h2>
          <button
            onClick={() => {
              setModalType('medical-record');
              setEditingItem(null);
              setShowModal(true);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
          >
            <Plus className="h-4 w-4" />
            <span>New Record</span>
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search medical records..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
            {filteredRecords.map(record => {
              const patient = data.patients.find(p => p.id === record.patientId);
              return (
                <div key={record.id} className="border border-gray-200 rounded-lg p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{patient?.name}</h3>
                      <p className="text-sm text-gray-600">ID: {record.patientId} • {record.date}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => {
                          setModalType('medical-record');
                          setEditingItem(record);
                          setShowModal(true);
                        }}
                        className="text-blue-600 hover:text-blue-900"
                        title="Edit Record"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleView(record, 'medical-record')}
                        className="text-green-600 hover:text-green-900"
                        title="View Details"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(record.id, 'medical-record')}
                        className="text-red-600 hover:text-red-900"
                        title="Delete Record"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Doctor:</p>
                      <p className="font-medium">{record.doctorName}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Follow-up:</p>
                      <p className="font-medium">{record.followUpDate}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">Diagnosis:</p>
                    <p className="text-sm font-medium bg-blue-50 p-2 rounded">{record.diagnosis}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-600">BP</p>
                      <p className="font-medium">{record.vitals.bp}</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-600">Pulse</p>
                      <p className="font-medium">{record.vitals.pulse}</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-600">Temp</p>
                      <p className="font-medium">{record.vitals.temp}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">Prescriptions:</p>
                    {record.prescriptions.map((prescription, index) => (
                      <div key={index} className="text-sm bg-green-50 p-2 rounded">
                        <p className="font-medium">{prescription.medication}</p>
                        <p className="text-gray-600">{prescription.dosage} for {prescription.duration}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">Notes:</p>
                    <p className="text-sm text-gray-800">{record.notes}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  // Pharmacy Management Component
  const PharmacyManagement = () => {
    const filteredMedications = data.medications.filter(med =>
      med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      med.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Pharmacy Management</h2>
          <div className="flex space-x-3">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center space-x-2">
              <Package className="h-4 w-4" />
              <span>Restock Alert</span>
            </button>
            <button
              onClick={() => {
                setModalType('medication');
                setEditingItem(null);
                setShowModal(true);
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
            >
              <Plus className="h-4 w-4" />
              <span>Add Medication</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Medications</p>
                <p className="text-2xl font-bold text-gray-900">{data.medications.length}</p>
              </div>
              <Pill className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Low Stock</p>
                <p className="text-2xl font-bold text-orange-600">{data.medications.filter(m => m.stock < 100).length}</p>
              </div>
              <AlertCircle className="h-8 w-8 text-orange-600" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Expiring Soon</p>
                <p className="text-2xl font-bold text-red-600">{data.medications.filter(m => new Date(m.expiryDate) < new Date('2025-01-01')).length}</p>
              </div>
              <Timer className="h-8 w-8 text-red-600" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Value</p>
                <p className="text-2xl font-bold text-green-600">${data.medications.reduce((sum, med) => sum + (med.stock * med.price), 0).toFixed(0)}</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search medications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="ml-4 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 flex items-center space-x-2">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Medication</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplier</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredMedications.map(medication => (
                  <tr key={medication.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{medication.name}</div>
                        <div className="text-sm text-gray-500">Batch: {medication.batchNumber}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                        {medication.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className={`text-sm font-medium ${
                          medication.stock < 50 ? 'text-red-600' : 
                          medication.stock < 100 ? 'text-orange-600' : 'text-gray-900'
                        }`}>
                          {medication.stock}
                        </span>
                        {medication.stock < 100 && (
                          <AlertCircle className="ml-2 h-4 w-4 text-orange-500" />
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${medication.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-sm ${
                        new Date(medication.expiryDate) < new Date('2025-01-01') ? 'text-red-600 font-medium' : 'text-gray-900'
                      }`}>
                        {medication.expiryDate}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {medication.supplier}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => {
                            setModalType('medication');
                            setEditingItem(medication);
                            setShowModal(true);
                          }}
                          className="text-blue-600 hover:text-blue-900"
                          title="Edit Medication"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleView(medication, 'medication')}
                          className="text-green-600 hover:text-green-900"
                          title="View Details"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(medication.id, 'medication')}
                          className="text-red-600 hover:text-red-900"
                          title="Delete Medication"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  const UserManagement = () => {
    const filteredUsers = data.users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
          <button
            onClick={() => {
              setModalType('user');
              setEditingItem(null);
              setShowModal(true);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
          >
            <UserPlus className="h-4 w-4" />
            <span>Add User</span>
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.map(user => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">@{user.username}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full capitalize ${
                        user.role === 'admin' ? 'bg-purple-100 text-purple-800' :
                        user.role === 'doctor' ? 'bg-blue-100 text-blue-800' :
                        user.role === 'nurse' ? 'bg-green-100 text-green-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {user.role.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        user.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {user.active ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => {
                            setModalType('user');
                            setEditingItem(user);
                            setShowModal(true);
                          }}
                          className="text-blue-600 hover:text-blue-900"
                          title="Edit User"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleView(user, 'user')}
                          className="text-green-600 hover:text-green-900"
                          title="View Details"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        {user.id !== currentUser.id && (
                          <button
                            onClick={() => handleDelete(user.id, 'user')}
                            className="text-red-600 hover:text-red-900"
                            title="Delete User"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  // View Modal Component for displaying record details
  const ViewModal = ({ type, item, onClose }) => {
    if (!item) return null;

    const renderViewContent = () => {
      switch(type) {
        case 'patient-view':
          return (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <p className="mt-1 text-sm text-gray-900">{item.name}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Patient ID</label>
                  <p className="mt-1 text-sm text-gray-900">{item.id}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Age</label>
                  <p className="mt-1 text-sm text-gray-900">{item.age}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Gender</label>
                  <p className="mt-1 text-sm text-gray-900">{item.gender}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Blood Type</label>
                  <p className="mt-1 text-sm text-gray-900">{item.bloodType}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <p className="mt-1 text-sm text-gray-900">{item.phone}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <p className="mt-1 text-sm text-gray-900">{item.email}</p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <p className="mt-1 text-sm text-gray-900">{item.address}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Allergies</label>
                  <p className="mt-1 text-sm text-gray-900">{item.allergies}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Emergency Contact</label>
                  <p className="mt-1 text-sm text-gray-900">{item.emergencyContact}</p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Chronic Illnesses</label>
                <p className="mt-1 text-sm text-gray-900">{item.chronicIllnesses}</p>
              </div>
            </div>
          );

        case 'user-view':
          return (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <p className="mt-1 text-sm text-gray-900">{item.name}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Username</label>
                  <p className="mt-1 text-sm text-gray-900">@{item.username}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <p className="mt-1 text-sm text-gray-900">{item.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Role</label>
                  <span className={`mt-1 inline-block px-2 py-1 text-xs rounded-full capitalize ${
                    item.role === 'admin' ? 'bg-purple-100 text-purple-800' :
                    item.role === 'doctor' ? 'bg-blue-100 text-blue-800' :
                    item.role === 'nurse' ? 'bg-green-100 text-green-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {item.role.replace('_', ' ')}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <span className={`mt-1 inline-block px-2 py-1 text-xs rounded-full ${
                    item.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {item.active ? 'Active' : 'Inactive'}
                  </span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">User ID</label>
                  <p className="mt-1 text-sm text-gray-900">{item.id}</p>
                </div>
              </div>
              {item.specialization && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Specialization</label>
                  <p className="mt-1 text-sm text-gray-900">{item.specialization}</p>
                </div>
              )}
              {item.department && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Department</label>
                  <p className="mt-1 text-sm text-gray-900">{item.department}</p>
                </div>
              )}
            </div>
          );

        case 'medication-view':
          return (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Medication Name</label>
                  <p className="mt-1 text-sm text-gray-900 font-medium">{item.name}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Category</label>
                  <span className="mt-1 inline-block px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Current Stock</label>
                  <p className={`mt-1 text-sm font-medium ${
                    item.stock < 50 ? 'text-red-600' : 
                    item.stock < 100 ? 'text-orange-600' : 'text-gray-900'
                  }`}>
                    {item.stock} units
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Price per Unit</label>
                  <p className="mt-1 text-sm text-gray-900">${item.price}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Total Value</label>
                  <p className="mt-1 text-sm text-gray-900 font-medium">${(item.stock * item.price).toFixed(2)}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Supplier</label>
                  <p className="mt-1 text-sm text-gray-900">{item.supplier}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Batch Number</label>
                  <p className="mt-1 text-sm text-gray-900">{item.batchNumber}</p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                <p className={`mt-1 text-sm ${
                  new Date(item.expiryDate) < new Date('2025-01-01') ? 'text-red-600 font-medium' : 'text-gray-900'
                }`}>
                  {item.expiryDate}
                </p>
              </div>
            </div>
          );

        case 'appointment-view':
          return (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Patient</label>
                  <p className="mt-1 text-sm text-gray-900 font-medium">{item.patientName}</p>
                  <p className="text-xs text-gray-500">ID: {item.patientId}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Doctor</label>
                  <p className="mt-1 text-sm text-gray-900">{item.doctorName}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <p className="mt-1 text-sm text-gray-900">{item.date}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Time</label>
                  <p className="mt-1 text-sm text-gray-900">{item.time}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Type</label>
                  <p className="mt-1 text-sm text-gray-900">{item.type}</p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <span className={`mt-1 inline-block px-2 py-1 text-xs rounded-full ${
                  item.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' :
                  item.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {item.status}
                </span>
              </div>
              {item.notes && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Notes</label>
                  <p className="mt-1 text-sm text-gray-900 bg-gray-50 p-3 rounded-lg">{item.notes}</p>
                </div>
              )}
            </div>
          );

        case 'medical-record-view':
          return (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Patient</label>
                  <p className="mt-1 text-sm text-gray-900">{data.patients.find(p => p.id === item.patientId)?.name}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <p className="mt-1 text-sm text-gray-900">{item.date}</p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Doctor</label>
                <p className="mt-1 text-sm text-gray-900">{item.doctorName}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Diagnosis</label>
                <p className="mt-1 text-sm text-gray-900 bg-blue-50 p-3 rounded-lg">{item.diagnosis}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Vital Signs</label>
                <div className="mt-1 grid grid-cols-4 gap-2">
                  <div className="bg-gray-50 p-2 rounded">
                    <p className="text-xs text-gray-600">Blood Pressure</p>
                    <p className="font-medium">{item.vitals?.bp}</p>
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <p className="text-xs text-gray-600">Pulse</p>
                    <p className="font-medium">{item.vitals?.pulse}</p>
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <p className="text-xs text-gray-600">Temperature</p>
                    <p className="font-medium">{item.vitals?.temp}</p>
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <p className="text-xs text-gray-600">Weight</p>
                    <p className="font-medium">{item.vitals?.weight}</p>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Treatment Plan</label>
                <p className="mt-1 text-sm text-gray-900">{item.treatment}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Prescriptions</label>
                <div className="mt-1 space-y-1">
                  {item.prescriptions?.map((prescription, index) => (
                    <div key={index} className="bg-green-50 p-2 rounded text-sm">
                      <p className="font-medium">{prescription.medication}</p>
                      <p className="text-gray-600">{prescription.dosage} for {prescription.duration}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Notes</label>
                <p className="mt-1 text-sm text-gray-900">{item.notes}</p>
              </div>
            </div>
          );

        case 'lab-test-view':
          return (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Patient</label>
                  <p className="mt-1 text-sm text-gray-900">{item.patientName}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Test Type</label>
                  <p className="mt-1 text-sm text-gray-900">{item.testType}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Request Date</label>
                  <p className="mt-1 text-sm text-gray-900">{item.requestDate}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Collection Date</label>
                  <p className="mt-1 text-sm text-gray-900">{item.collectionDate}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Result Date</label>
                  <p className="mt-1 text-sm text-gray-900">{item.resultDate || 'Pending'}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Technician</label>
                  <p className="mt-1 text-sm text-gray-900">{item.technician}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Cost</label>
                  <p className="mt-1 text-sm text-gray-900">${item.cost}</p>
                </div>
              </div>
              {item.results && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Results</label>
                  <div className="mt-1 bg-green-50 p-3 rounded-lg">
                    {typeof item.results === 'object' ? (
                      Object.entries(item.results).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="capitalize">{key}:</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-gray-900">{item.results}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          );

        default:
          return (
            <div className="space-y-4">
              <div className="text-center py-8">
                <Eye className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Detailed view for this item type is not yet implemented.</p>
              </div>
            </div>
          );
      }
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                View {type.replace('-view', '').replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} Details
              </h3>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="p-6">
            {renderViewContent()}
          </div>
          <div className="p-6 border-t border-gray-200 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Modal Component for Add/Edit forms
  const Modal = ({ type, item, onSave, onClose }) => {
    const [formData, setFormData] = useState(item || {});

    const handleSubmit = () => {
      onSave(formData);
    };

    const renderForm = () => {
      switch(type) {
        case 'patient':
          return (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={formData.name || ''}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                  <input
                    type="number"
                    value={formData.age || ''}
                    onChange={(e) => setFormData({...formData, age: parseInt(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                  <select
                    value={formData.gender || ''}
                    onChange={(e) => setFormData({...formData, gender: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Blood Type</label>
                  <select
                    value={formData.bloodType || ''}
                    onChange={(e) => setFormData({...formData, bloodType: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Blood Type</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone || ''}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email || ''}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <textarea
                  value={formData.address || ''}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows="2"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Allergies</label>
                  <input
                    type="text"
                    value={formData.allergies || ''}
                    onChange={(e) => setFormData({...formData, allergies: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="None or list allergies"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Contact</label>
                  <input
                    type="tel"
                    value={formData.emergencyContact || ''}
                    onChange={(e) => setFormData({...formData, emergencyContact: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
                >
                  <Save className="h-4 w-4" />
                  <span>Save Patient</span>
                </button>
              </div>
            </div>
          );

        case 'user':
          return (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={formData.name || ''}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                  <input
                    type="text"
                    value={formData.username || ''}
                    onChange={(e) => setFormData({...formData, username: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email || ''}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                  <select
                    value={formData.role || ''}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Role</option>
                    <option value="admin">Administrator</option>
                    <option value="doctor">Doctor</option>
                    <option value="nurse">Nurse</option>
                    <option value="lab_tech">Lab Technician</option>
                    <option value="pharmacist">Pharmacist</option>
                  </select>
                </div>
              </div>

              {!item && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input
                    type="password"
                    value={formData.password || ''}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required={!item}
                    placeholder="Enter password"
                  />
                </div>
              )}

              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.active !== false}
                  onChange={(e) => setFormData({...formData, active: e.target.checked})}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-900">Active Account</label>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
                >
                  <Save className="h-4 w-4" />
                  <span>Save User</span>
                </button>
              </div>
            </div>
          );

        case 'medical-record':
          return (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Patient</label>
                  <select
                    value={formData.patientId || ''}
                    onChange={(e) => {
                      const patient = data.patients.find(p => p.id === e.target.value);
                      setFormData({...formData, patientId: e.target.value, patientName: patient?.name});
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Patient</option>
                    {data.patients.map(patient => (
                      <option key={patient.id} value={patient.id}>{patient.name} ({patient.id})</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input
                    type="date"
                    value={formData.date || new Date().toISOString().split('T')[0]}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Diagnosis</label>
                <input
                  type="text"
                  value={formData.diagnosis || ''}
                  onChange={(e) => setFormData({...formData, diagnosis: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="grid grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Blood Pressure</label>
                  <input
                    type="text"
                    value={formData.vitals?.bp || ''}
                    onChange={(e) => setFormData({...formData, vitals: {...(formData.vitals || {}), bp: e.target.value}})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="120/80"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pulse</label>
                  <input
                    type="text"
                    value={formData.vitals?.pulse || ''}
                    onChange={(e) => setFormData({...formData, vitals: {...(formData.vitals || {}), pulse: e.target.value}})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="72"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Temperature</label>
                  <input
                    type="text"
                    value={formData.vitals?.temp || ''}
                    onChange={(e) => setFormData({...formData, vitals: {...(formData.vitals || {}), temp: e.target.value}})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="98.6°F"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Weight</label>
                  <input
                    type="text"
                    value={formData.vitals?.weight || ''}
                    onChange={(e) => setFormData({...formData, vitals: {...(formData.vitals || {}), weight: e.target.value}})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="145 lbs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Treatment Plan</label>
                <textarea
                  value={formData.treatment || ''}
                  onChange={(e) => setFormData({...formData, treatment: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows="3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                <textarea
                  value={formData.notes || ''}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows="3"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
                >
                  <Save className="h-4 w-4" />
                  <span>Save Record</span>
                </button>
              </div>
            </div>
          );

        case 'medication':
          return (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Medication Name</label>
                  <input
                    type="text"
                    value={formData.name || ''}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    value={formData.category || ''}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="Antibiotic">Antibiotic</option>
                    <option value="Pain Relief">Pain Relief</option>
                    <option value="Diabetes">Diabetes</option>
                    <option value="Hypertension">Hypertension</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Stock Quantity</label>
                  <input
                    type="number"
                    value={formData.stock || ''}
                    onChange={(e) => setFormData({...formData, stock: parseInt(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price per Unit</label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.price || ''}
                    onChange={(e) => setFormData({...formData, price: parseFloat(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                  <input
                    type="date"
                    value={formData.expiryDate || ''}
                    onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Supplier</label>
                  <input
                    type="text"
                    value={formData.supplier || ''}
                    onChange={(e) => setFormData({...formData, supplier: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Batch Number</label>
                  <input
                    type="text"
                    value={formData.batchNumber || ''}
                    onChange={(e) => setFormData({...formData, batchNumber: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
                >
                  <Save className="h-4 w-4" />
                  <span>Save Medication</span>
                </button>
              </div>
            </div>
          );

        case 'lab-test':
          return (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Patient</label>
                  <select
                    value={formData.patientId || ''}
                    onChange={(e) => {
                      const patient = data.patients.find(p => p.id === e.target.value);
                      setFormData({...formData, patientId: e.target.value, patientName: patient?.name});
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Patient</option>
                    {data.patients.map(patient => (
                      <option key={patient.id} value={patient.id}>{patient.name} ({patient.id})</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Test Type</label>
                  <select
                    value={formData.testType || ''}
                    onChange={(e) => setFormData({...formData, testType: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Test Type</option>
                    <option value="Blood Glucose">Blood Glucose</option>
                    <option value="Complete Blood Count">Complete Blood Count</option>
                    <option value="Lipid Panel">Lipid Panel</option>
                    <option value="Liver Function Test">Liver Function Test</option>
                    <option value="Kidney Function Test">Kidney Function Test</option>
                    <option value="Thyroid Function Test">Thyroid Function Test</option>
                    <option value="Urinalysis">Urinalysis</option>
                    <option value="X-Ray">X-Ray</option>
                    <option value="ECG">ECG</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Request Date</label>
                  <input
                    type="date"
                    value={formData.requestDate || new Date().toISOString().split('T')[0]}
                    onChange={(e) => setFormData({...formData, requestDate: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Collection Date</label>
                  <input
                    type="date"
                    value={formData.collectionDate || ''}
                    onChange={(e) => setFormData({...formData, collectionDate: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cost</label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.cost || ''}
                    onChange={(e) => setFormData({...formData, cost: parseFloat(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    value={formData.status || 'Requested'}
                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Requested">Requested</option>
                    <option value="Collected">Collected</option>
                    <option value="Processing">Processing</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Technician</label>
                  <select
                    value={formData.technician || ''}
                    onChange={(e) => setFormData({...formData, technician: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Technician</option>
                    {data.users.filter(u => u.role === 'lab_tech').map(tech => (
                      <option key={tech.id} value={tech.name}>{tech.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
                >
                  <Save className="h-4 w-4" />
                  <span>Save Test Request</span>
                </button>
              </div>
            </div>
          );

        case 'appointment':
          return (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Patient</label>
                  <select
                    value={formData.patientId || ''}
                    onChange={(e) => {
                      const patient = data.patients.find(p => p.id === e.target.value);
                      setFormData({...formData, patientId: e.target.value, patientName: patient?.name});
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Patient</option>
                    {data.patients.map(patient => (
                      <option key={patient.id} value={patient.id}>{patient.name} ({patient.id})</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Doctor</label>
                  <select
                    value={formData.doctorId || ''}
                    onChange={(e) => {
                      const doctor = data.users.find(u => u.id === parseInt(e.target.value));
                      setFormData({...formData, doctorId: parseInt(e.target.value), doctorName: doctor?.name});
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Doctor</option>
                    {data.users.filter(u => u.role === 'doctor').map(doctor => (
                      <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input
                    type="date"
                    value={formData.date || ''}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                  <input
                    type="time"
                    value={formData.time || ''}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                  <select
                    value={formData.type || ''}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Type</option>
                    <option value="Consultation">Consultation</option>
                    <option value="Follow-up">Follow-up</option>
                    <option value="Regular Checkup">Regular Checkup</option>
                    <option value="Emergency">Emergency</option>
                    <option value="Specialist">Specialist</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                <textarea
                  value={formData.notes || ''}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows="3"
                  placeholder="Appointment notes or special instructions..."
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
                >
                  <Save className="h-4 w-4" />
                  <span>Schedule Appointment</span>
                </button>
              </div>
            </div>
          );

        case 'inventory':
          return (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Item Name</label>
                  <input
                    type="text"
                    value={formData.name || ''}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    value={formData.category || ''}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="Medical Supplies">Medical Supplies</option>
                    <option value="Equipment">Equipment</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Consumables">Consumables</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Current Stock</label>
                  <input
                    type="number"
                    value={formData.stock || ''}
                    onChange={(e) => setFormData({...formData, stock: parseInt(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Stock</label>
                  <input
                    type="number"
                    value={formData.minStock || ''}
                    onChange={(e) => setFormData({...formData, minStock: parseInt(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Unit Price</label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.price || ''}
                    onChange={(e) => setFormData({...formData, price: parseFloat(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Supplier</label>
                <input
                  type="text"
                  value={formData.supplier || ''}
                  onChange={(e) => setFormData({...formData, supplier: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
                >
                  <Save className="h-4 w-4" />
                  <span>Save Item</span>
                </button>
              </div>
            </div>
          );

        case 'in-patient':
          return (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Patient</label>
                  <select
                    value={formData.patientId || ''}
                    onChange={(e) => {
                      const patient = data.patients.find(p => p.id === e.target.value);
                      setFormData({...formData, patientId: e.target.value, patientName: patient?.name});
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Patient</option>
                    {data.patients.map(patient => (
                      <option key={patient.id} value={patient.id}>{patient.name} ({patient.id})</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Attending Doctor</label>
                  <select
                    value={formData.attendingDoctor || ''}
                    onChange={(e) => setFormData({...formData, attendingDoctor: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Doctor</option>
                    {data.users.filter(u => u.role === 'doctor').map(doctor => (
                      <option key={doctor.id} value={doctor.name}>{doctor.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Room Number</label>
                  <input
                    type="text"
                    value={formData.roomNumber || ''}
                    onChange={(e) => setFormData({...formData, roomNumber: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bed Number</label>
                  <input
                    type="text"
                    value={formData.bedNumber || ''}
                    onChange={(e) => setFormData({...formData, bedNumber: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                  <select
                    value={formData.department || ''}
                    onChange={(e) => setFormData({...formData, department: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Department</option>
                    <option value="Internal Medicine">Internal Medicine</option>
                    <option value="Surgery">Surgery</option>
                    <option value="ICU">ICU</option>
                    <option value="Emergency">Emergency</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Orthopedics">Orthopedics</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Admission Date</label>
                  <input
                    type="date"
                    value={formData.admissionDate || new Date().toISOString().split('T')[0]}
                    onChange={(e) => setFormData({...formData, admissionDate: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Condition</label>
                  <select
                    value={formData.condition || ''}
                    onChange={(e) => setFormData({...formData, condition: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Condition</option>
                    <option value="Stable">Stable</option>
                    <option value="Improving">Improving</option>
                    <option value="Critical">Critical</option>
                    <option value="Serious">Serious</option>
                    <option value="Fair">Fair</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                <textarea
                  value={formData.notes || ''}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows="3"
                  placeholder="Admission notes, special care instructions..."
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
                >
                  <Save className="h-4 w-4" />
                  <span>Admit Patient</span>
                </button>
              </div>
            </div>
          );

        case 'bill':
          return (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Patient</label>
                  <select
                    value={formData.patientId || ''}
                    onChange={(e) => {
                      const patient = data.patients.find(p => p.id === e.target.value);
                      setFormData({...formData, patientId: e.target.value, patientName: patient?.name, insurance: patient?.insurance});
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Patient</option>
                    {data.patients.map(patient => (
                      <option key={patient.id} value={patient.id}>{patient.name} ({patient.id})</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
                  <select
                    value={formData.paymentMethod || ''}
                    onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Payment Method</option>
                    <option value="Cash">Cash</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Insurance">Insurance</option>
                    <option value="Insurance + Cash">Insurance + Cash</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Services</label>
                <div className="space-y-2">
                  {(formData.services || []).map((service, index) => (
                    <div key={index} className="grid grid-cols-3 gap-2">
                      <input
                        type="text"
                        placeholder="Service description"
                        value={service.description || ''}
                        onChange={(e) => {
                          const newServices = [...(formData.services || [])];
                          newServices[index] = {...service, description: e.target.value};
                          setFormData({...formData, services: newServices});
                        }}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="number"
                        step="0.01"
                        placeholder="Amount"
                        value={service.amount || ''}
                        onChange={(e) => {
                          const newServices = [...(formData.services || [])];
                          newServices[index] = {...service, amount: parseFloat(e.target.value) || 0};
                          setFormData({...formData, services: newServices});
                        }}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        onClick={() => {
                          const newServices = formData.services.filter((_, i) => i !== index);
                          setFormData({...formData, services: newServices});
                        }}
                        className="px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => {
                      const newServices = [...(formData.services || []), {description: '', amount: 0}];
                      setFormData({...formData, services: newServices});
                    }}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center space-x-2"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add Service</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Discount (%)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.discountPercent || 0}
                    onChange={(e) => setFormData({...formData, discountPercent: parseFloat(e.target.value) || 0})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tax (%)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.taxPercent || 5}
                    onChange={(e) => setFormData({...formData, taxPercent: parseFloat(e.target.value) || 0})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Payment Status</label>
                  <select
                    value={formData.paymentStatus || 'Pending'}
                    onChange={(e) => setFormData({...formData, paymentStatus: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Paid">Paid</option>
                    <option value="Partially Paid">Partially Paid</option>
                    <option value="Overdue">Overdue</option>
                  </select>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${((formData.services || []).reduce((sum, service) => sum + (service.amount || 0), 0)).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Discount:</span>
                    <span>-${(((formData.services || []).reduce((sum, service) => sum + (service.amount || 0), 0)) * (formData.discountPercent || 0) / 100).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax:</span>
                    <span>${(((formData.services || []).reduce((sum, service) => sum + (service.amount || 0), 0)) * (formData.taxPercent || 0) / 100).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Total:</span>
                    <span>${((formData.services || []).reduce((sum, service) => sum + (service.amount || 0), 0) * (1 - (formData.discountPercent || 0) / 100) * (1 + (formData.taxPercent || 0) / 100)).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
                >
                  <Save className="h-4 w-4" />
                  <span>Generate Bill</span>
                </button>
              </div>
            </div>
          );

        case 'queue-token':
          return (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Patient</label>
                  <select
                    value={formData.patientId || ''}
                    onChange={(e) => {
                      const patient = data.patients.find(p => p.id === e.target.value);
                      setFormData({...formData, patientId: e.target.value, patientName: patient?.name});
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Patient</option>
                    {data.patients.map(patient => (
                      <option key={patient.id} value={patient.id}>{patient.name} ({patient.id})</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                  <select
                    value={formData.department || ''}
                    onChange={(e) => setFormData({...formData, department: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Department</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Emergency">Emergency</option>
                    <option value="General Medicine">General Medicine</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Surgery">Surgery</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Doctor</label>
                  <select
                    value={formData.doctorName || ''}
                    onChange={(e) => setFormData({...formData, doctorName: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Doctor</option>
                    {data.users.filter(u => u.role === 'doctor').map(doctor => (
                      <option key={doctor.id} value={doctor.name}>{doctor.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                  <select
                    value={formData.priority || 'Normal'}
                    onChange={(e) => setFormData({...formData, priority: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Normal">Normal</option>
                    <option value="High">High</option>
                    <option value="Emergency">Emergency</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Appointment Time</label>
                  <input
                    type="time"
                    value={formData.appointmentTime || ''}
                    onChange={(e) => setFormData({...formData, appointmentTime: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center space-x-2"
                >
                  <Save className="h-4 w-4" />
                  <span>Generate Token</span>
                </button>
              </div>
            </div>
          );

        case 'emergency-case':
          return (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Patient Name</label>
                  <input
                    type="text"
                    value={formData.patientName || ''}
                    onChange={(e) => setFormData({...formData, patientName: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                  <input
                    type="number"
                    value={formData.age || ''}
                    onChange={(e) => setFormData({...formData, age: parseInt(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Chief Complaint</label>
                <textarea
                  value={formData.chiefComplaint || ''}
                  onChange={(e) => setFormData({...formData, chiefComplaint: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows="3"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Triage Level</label>
                  <select
                    value={formData.triageLevel || ''}
                    onChange={(e) => setFormData({...formData, triageLevel: parseInt(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Triage Level</option>
                    <option value="1">Level 1 - Critical (Red)</option>
                    <option value="2">Level 2 - Urgent (Orange)</option>
                    <option value="3">Level 3 - Semi-Urgent (Yellow)</option>
                    <option value="4">Level 4 - Non-Urgent (Green)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bed Assignment</label>
                  <select
                    value={formData.bedNumber || ''}
                    onChange={(e) => setFormData({...formData, bedNumber: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Bed</option>
                    <option value="ER-1">ER-1</option>
                    <option value="ER-2">ER-2</option>
                    <option value="ER-3">ER-3</option>
                    <option value="ER-4">ER-4</option>
                    <option value="ER-5">ER-5</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Blood Pressure</label>
                  <input
                    type="text"
                    value={formData.vitals?.bp || ''}
                    onChange={(e) => setFormData({...formData, vitals: {...(formData.vitals || {}), bp: e.target.value}})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="120/80"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pulse</label>
                  <input
                    type="text"
                    value={formData.vitals?.pulse || ''}
                    onChange={(e) => setFormData({...formData, vitals: {...(formData.vitals || {}), pulse: e.target.value}})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="72"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Temperature</label>
                  <input
                    type="text"
                    value={formData.vitals?.temp || ''}
                    onChange={(e) => setFormData({...formData, vitals: {...(formData.vitals || {}), temp: e.target.value}})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="98.6°F"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Oxygen Saturation</label>
                  <input
                    type="text"
                    value={formData.vitals?.oxygen || ''}
                    onChange={(e) => setFormData({...formData, vitals: {...(formData.vitals || {}), oxygen: e.target.value}})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="98%"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Assigned Doctor</label>
                  <select
                    value={formData.assignedDoctor || ''}
                    onChange={(e) => setFormData({...formData, assignedDoctor: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Doctor</option>
                    {data.users.filter(u => u.role === 'doctor').map(doctor => (
                      <option key={doctor.id} value={doctor.name}>{doctor.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Assigned Nurse</label>
                  <select
                    value={formData.assignedNurse || ''}
                    onChange={(e) => setFormData({...formData, assignedNurse: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Nurse</option>
                    {data.users.filter(u => u.role === 'nurse').map(nurse => (
                      <option key={nurse.id} value={nurse.name}>{nurse.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Initial Notes</label>
                <textarea
                  value={formData.notes || ''}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows="3"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center space-x-2"
                >
                  <Save className="h-4 w-4" />
                  <span>Register Emergency Case</span>
                </button>
              </div>
            </div>
          );

        case 'surgery-schedule':
          return (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Patient</label>
                  <select
                    value={formData.patientId || ''}
                    onChange={(e) => {
                      const patient = data.patients.find(p => p.id === e.target.value);
                      setFormData({...formData, patientId: e.target.value, patientName: patient?.name});
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Patient</option>
                    {data.patients.map(patient => (
                      <option key={patient.id} value={patient.id}>{patient.name} ({patient.id})</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Surgery Type</label>
                  <input
                    type="text"
                    value={formData.surgeryType || ''}
                    onChange={(e) => setFormData({...formData, surgeryType: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Scheduled Date</label>
                  <input
                    type="date"
                    value={formData.scheduledDate || ''}
                    onChange={(e) => setFormData({...formData, scheduledDate: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Scheduled Time</label>
                  <input
                    type="time"
                    value={formData.scheduledTime || ''}
                    onChange={(e) => setFormData({...formData, scheduledTime: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Duration (minutes)</label>
                  <input
                    type="number"
                    value={formData.duration || ''}
                    onChange={(e) => setFormData({...formData, duration: parseInt(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Primary Surgeon</label>
                  <select
                    value={formData.surgeon || ''}
                    onChange={(e) => setFormData({...formData, surgeon: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Surgeon</option>
                    {data.users.filter(u => u.role === 'doctor').map(doctor => (
                      <option key={doctor.id} value={doctor.name}>{doctor.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Assistant Surgeon</label>
                  <select
                    value={formData.assistantSurgeon || ''}
                    onChange={(e) => setFormData({...formData, assistantSurgeon: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Assistant (Optional)</option>
                    {data.users.filter(u => u.role === 'doctor').map(doctor => (
                      <option key={doctor.id} value={doctor.name}>{doctor.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Operating Room</label>
                  <select
                    value={formData.operatingRoom || ''}
                    onChange={(e) => setFormData({...formData, operatingRoom: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select OR</option>
                    <option value="OR-1">OR-1</option>
                    <option value="OR-2">OR-2</option>
                    <option value="OR-3">OR-3</option>
                    <option value="CATH-1">CATH-1</option>
                    <option value="CATH-2">CATH-2</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                  <select
                    value={formData.priority || 'Elective'}
                    onChange={(e) => setFormData({...formData, priority: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Elective">Elective</option>
                    <option value="Urgent">Urgent</option>
                    <option value="Emergency">Emergency</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                  <select
                    value={formData.department || ''}
                    onChange={(e) => setFormData({...formData, department: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Department</option>
                    <option value="General Surgery">General Surgery</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Orthopedics">Orthopedics</option>
                    <option value="Neurosurgery">Neurosurgery</option>
                    <option value="Urology">Urology</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Surgery Notes</label>
                <textarea
                  value={formData.notes || ''}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows="3"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
                >
                  <Save className="h-4 w-4" />
                  <span>Schedule Surgery</span>
                </button>
              </div>
            </div>
          );

        default:
          return null;
      }
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                {item ? 'Edit' : 'Add'} {
                  type === 'patient' ? 'Patient' : 
                  type === 'user' ? 'User' : 
                  type === 'medical-record' ? 'Medical Record' :
                  type === 'medication' ? 'Medication' :
                  type === 'lab-test' ? 'Lab Test Request' :
                  type === 'appointment' ? 'Appointment' :
                  type === 'inventory' ? 'Inventory Item' :
                  type === 'in-patient' ? 'In-Patient Admission' :
                  type === 'bill' ? 'Bill' :
                  type === 'queue-token' ? 'Queue Token' :
                  type === 'emergency-case' ? 'Emergency Case' :
                  type === 'surgery-schedule' ? 'Surgery Schedule' :
                  'Item'
                }
              </h3>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="p-6">
            {renderForm()}
          </div>
        </div>
      </div>
    );
  };

  // Handle save operations
  const handleSave = (formData) => {
    if (modalType === 'patient') {
      if (editingItem) {
        // Update existing patient
        setData(prev => ({
          ...prev,
          patients: prev.patients.map(p => p.id === editingItem.id ? {...formData, id: editingItem.id} : p)
        }));
      } else {
        // Add new patient
        const newId = 'P' + String(data.patients.length + 1).padStart(3, '0');
        setData(prev => ({
          ...prev,
          patients: [...prev.patients, {
            ...formData,
            id: newId,
            registrationDate: new Date().toISOString().split('T')[0],
            lastVisit: 'Never'
          }]
        }));
      }
    } else if (modalType === 'user') {
      if (editingItem) {
        // Update existing user
        setData(prev => ({
          ...prev,
          users: prev.users.map(u => u.id === editingItem.id ? {...formData, id: editingItem.id} : u)
        }));
      } else {
        // Add new user
        const newId = Math.max(...data.users.map(u => u.id)) + 1;
        setData(prev => ({
          ...prev,
          users: [...prev.users, {...formData, id: newId, active: formData.active !== false}]
        }));
      }
    } else if (modalType === 'medical-record') {
      if (editingItem) {
        // Update existing record
        setData(prev => ({
          ...prev,
          medicalRecords: prev.medicalRecords.map(r => r.id === editingItem.id ? {...formData, id: editingItem.id} : r)
        }));
      } else {
        // Add new medical record
        const newId = 'MR' + String(data.medicalRecords.length + 1).padStart(3, '0');
        setData(prev => ({
          ...prev,
          medicalRecords: [...prev.medicalRecords, {
            ...formData,
            id: newId,
            doctorId: currentUser.id,
            doctorName: currentUser.name,
            prescriptions: formData.prescriptions || [],
            followUpDate: formData.followUpDate || null
          }]
        }));
      }
    } else if (modalType === 'medication') {
      if (editingItem) {
        // Update existing medication
        setData(prev => ({
          ...prev,
          medications: prev.medications.map(m => m.id === editingItem.id ? {...formData, id: editingItem.id} : m)
        }));
      } else {
        // Add new medication
        const newId = 'M' + String(data.medications.length + 1).padStart(3, '0');
        setData(prev => ({
          ...prev,
          medications: [...prev.medications, {...formData, id: newId}]
        }));
      }
    } else if (modalType === 'lab-test') {
      if (editingItem) {
        // Update existing test
        setData(prev => ({
          ...prev,
          labTests: prev.labTests.map(t => t.id === editingItem.id ? {...formData, id: editingItem.id} : t)
        }));
      } else {
        // Add new lab test
        const newId = 'LT' + String(data.labTests.length + 1).padStart(3, '0');
        setData(prev => ({
          ...prev,
          labTests: [...prev.labTests, {
            ...formData,
            id: newId,
            doctor: currentUser.name,
            resultDate: null,
            results: null
          }]
        }));
      }
    } else if (modalType === 'appointment') {
      if (editingItem) {
        // Update existing appointment
        setData(prev => ({
          ...prev,
          appointments: prev.appointments.map(a => a.id === editingItem.id ? {...formData, id: editingItem.id} : a)
        }));
      } else {
        // Add new appointment
        const newId = 'A' + String(data.appointments.length + 1).padStart(3, '0');
        setData(prev => ({
          ...prev,
          appointments: [...prev.appointments, {
            ...formData,
            id: newId,
            status: 'Scheduled'
          }]
        }));
      }
    } else if (modalType === 'inventory') {
      if (editingItem) {
        // Update existing inventory item
        setData(prev => ({
          ...prev,
          inventory: prev.inventory.map(i => i.id === editingItem.id ? {...formData, id: editingItem.id} : i)
        }));
      } else {
        // Add new inventory item
        const newId = 'I' + String(data.inventory.length + 1).padStart(3, '0');
        setData(prev => ({
          ...prev,
          inventory: [...prev.inventory, {...formData, id: newId}]
        }));
      }
    } else if (modalType === 'in-patient') {
      if (editingItem) {
        // Update existing in-patient
        setData(prev => ({
          ...prev,
          inPatients: prev.inPatients.map(ip => ip.id === editingItem.id ? {...formData, id: editingItem.id} : ip)
        }));
      } else {
        // Add new in-patient
        const newId = 'IP' + String(data.inPatients.length + 1).padStart(3, '0');
        setData(prev => ({
          ...prev,
          inPatients: [...prev.inPatients, {
            ...formData,
            id: newId,
            status: 'Admitted',
            dischargeDate: null
          }]
        }));
      }
    } else if (modalType === 'bill') {
      if (editingItem) {
        // Update existing bill
        setData(prev => ({
          ...prev,
          billing: prev.billing.map(b => b.id === editingItem.id ? {...formData, id: editingItem.id} : b)
        }));
      } else {
        // Add new bill
        const newId = 'B' + String(data.billing.length + 1).padStart(3, '0');
        const subtotal = (formData.services || []).reduce((sum, service) => sum + (service.amount || 0), 0);
        const discount = subtotal * (formData.discountPercent || 0) / 100;
        const tax = (subtotal - discount) * (formData.taxPercent || 0) / 100;
        const total = subtotal - discount + tax;
        
        setData(prev => ({
          ...prev,
          billing: [...prev.billing, {
            ...formData,
            id: newId,
            date: new Date().toISOString().split('T')[0],
            subtotal: subtotal,
            discount: discount,
            tax: tax,
            total: total
          }]
        }));
      }
    } else if (modalType === 'queue-token') {
      // Add new queue token
      const newId = 'Q' + String(data.queue.length + 1).padStart(3, '0');
      const tokenNumber = formData.department === 'Emergency' ? 
        'E' + String(data.queue.filter(q => q.department === 'Emergency').length + 1).padStart(3, '0') :
        'A' + String(data.queue.filter(q => q.department !== 'Emergency').length + 1).padStart(3, '0');
      
      setData(prev => ({
        ...prev,
        queue: [...prev.queue, {
          ...formData,
          id: newId,
          tokenNumber: tokenNumber,
          arrivalTime: new Date().toTimeString().slice(0, 5),
          status: 'Waiting',
          estimatedWaitTime: Math.floor(Math.random() * 30) + 10
        }]
      }));
    } else if (modalType === 'emergency-case') {
      // Add new emergency case
      const newId = 'ER' + String(data.emergency.length + 1).padStart(3, '0');
      setData(prev => ({
        ...prev,
        emergency: [...prev.emergency, {
          ...formData,
          id: newId,
          arrivalTime: new Date().toISOString(),
          status: 'Waiting for Assessment',
          triageColor: formData.triageLevel === 1 ? 'Red' : 
                      formData.triageLevel === 2 ? 'Orange' : 
                      formData.triageLevel === 3 ? 'Yellow' : 'Green'
        }]
      }));
    } else if (modalType === 'surgery-schedule') {
      // Add new surgery
      const newId = 'SUR' + String(data.surgeries.length + 1).padStart(3, '0');
      setData(prev => ({
        ...prev,
        surgeries: [...prev.surgeries, {
          ...formData,
          id: newId,
          status: 'Scheduled',
          preOpNotes: null,
          postOpNotes: null
        }]
      }));
    }
    setShowModal(false);
    setEditingItem(null);
  };

  // Render different modules based on active selection
  const renderContent = () => {
    switch(activeModule) {
      case 'dashboard':
        return <Dashboard />;
      case 'patients':
        return <PatientManagement />;
      case 'appointments':
        return <AppointmentManagement />;
      case 'queue':
        return <QueueManagement />;
      case 'emergency':
        return <EmergencyDepartment />;
      case 'medical-records':
        return <MedicalRecordsManagement />;
      case 'surgery':
        return <SurgeryScheduling />;
      case 'pharmacy':
        return <PharmacyManagement />;
      case 'laboratory':
        return <LaboratoryManagement />;
      case 'billing':
        return <BillingManagement />;
      case 'inventory':
        return <InventoryManagement />;
      case 'in-patients':
        return <InPatientManagement />;
      case 'staff-schedule':
        return <StaffScheduling />;
      case 'equipment':
        return <EquipmentManagement />;
      case 'reports':
        return <ReportsAnalytics />;
      case 'audit-logs':
        return <AuditLogs />;
      case 'settings':
        return <SystemSettings />;
      case 'users':
        return <UserManagement />;
      default:
        return (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Settings className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Module Under Development</h3>
            <p className="text-gray-600">This module is currently being developed and will be available soon.</p>
          </div>
        );
    }
  };

  // Main render
  if (!currentUser) {
    return <LoginForm />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="ml-64 p-8">
        {/* Header with notifications */}
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 capitalize">
              {activeModule.replace('-', ' ')}
            </h1>
            <p className="text-gray-600">Welcome back, {currentUser.name}</p>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Notifications dropdown */}
            <div className="relative">
              <button className="relative p-2 text-gray-400 hover:text-gray-500 bg-white rounded-lg shadow-sm border border-gray-200">
                <Activity className="h-6 w-6" />
                {notifications.filter(n => !n.read).length > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {notifications.filter(n => !n.read).length}
                  </span>
                )}
              </button>
            </div>
            
            {/* Quick stats */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 px-4 py-2">
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">System Online</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4 text-blue-500" />
                  <span className="text-gray-600">{data.users.filter(u => u.active).length} users active</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {renderContent()}

        {/* Enhanced Footer with comprehensive system info */}
        <footer className="mt-12 py-8 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">System Overview</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Version:</span>
                  <span className="font-medium">v2.0.0 Enterprise</span>
                </div>
                <div className="flex justify-between">
                  <span>Modules:</span>
                  <span className="font-medium">{navigationItems.length} Active</span>
                </div>
                <div className="flex justify-between">
                  <span>Database:</span>
                  <span className="text-green-600 font-medium">Online</span>
                </div>
                <div className="flex justify-between">
                  <span>Uptime:</span>
                  <span className="font-medium">99.97%</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span>Real-time Queue Management</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span>Emergency Department Triage</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span>Surgery Scheduling</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span>Equipment Maintenance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span>Staff Scheduling</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span>Comprehensive Audit Logs</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">System Health</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">CPU Usage</span>
                    <span className="text-green-600 font-medium">23%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-green-500 h-1.5 rounded-full" style={{width: '23%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Memory</span>
                    <span className="text-blue-600 font-medium">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-blue-500 h-1.5 rounded-full" style={{width: '45%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Storage</span>
                    <span className="text-orange-600 font-medium">67%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-orange-500 h-1.5 rounded-full" style={{width: '67%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <div className="text-gray-600">Patients</div>
                  <div className="font-bold text-blue-600">{data.patients.length}</div>
                </div>
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <div className="text-gray-600">Staff</div>
                  <div className="font-bold text-green-600">{data.users.filter(u => u.active).length}</div>
                </div>
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <div className="text-gray-600">Beds</div>
                  <div className="font-bold text-orange-600">{50 - data.inPatients.filter(ip => !ip.dischargeDate).length}/50</div>
                </div>
                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <div className="text-gray-600">Equipment</div>
                  <div className="font-bold text-purple-600">{data.equipment.length}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center pt-6 border-t border-gray-200">
            <div className="flex items-center space-x-6 text-sm text-gray-600 mb-4 lg:mb-0">
              <div className="flex items-center space-x-2">
                <Hospital className="h-4 w-4 text-blue-600" />
                <span>© 2024 Suzan Hospital Management System</span>
              </div>
              <div className="flex items-center space-x-2">
                <Database className="h-4 w-4 text-green-600" />
                <span>Last backup: {new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="h-4 w-4 text-red-600" />
                <span>HIPAA Compliant</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>Network: LAN Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wifi className="h-4 w-4 text-green-500" />
                <span>Connection: Stable</span>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                All Systems Operational
              </span>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              Keyboard shortcuts: <kbd className="px-1 py-0.5 bg-gray-200 rounded text-xs">Ctrl+K</kbd> Search • 
              <kbd className="px-1 py-0.5 bg-gray-200 rounded text-xs mx-1">Ctrl+N</kbd> New Item • 
              <kbd className="px-1 py-0.5 bg-gray-200 rounded text-xs">Ctrl+/</kbd> Help
            </p>
          </div>
        </footer>
      </main>

      {showModal && (
        <Modal
          type={modalType}
          item={editingItem}
          onSave={handleSave}
          onClose={() => {
            setShowModal(false);
            setEditingItem(null);
          }}
        />
      )}

      {showViewModal && (
        <ViewModal
          type={modalType}
          item={viewingItem}
          onClose={() => {
            setShowViewModal(false);
            setViewingItem(null);
          }}
        />
      )}
    </div>
  );
};

export default HospitalManagementSystem;