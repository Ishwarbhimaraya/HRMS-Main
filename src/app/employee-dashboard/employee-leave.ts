export interface EmployeeLeave {
    userId: number;          // Unique ID of the employee (can be derived from the current logged-in user)
    leaveDates: Date[];      // Array of selected dates for leave
    leaveReason: string;     // Reason for the leave
    status?: string;         // Status of the leave request (optional, could be 'Pending', 'Approved', etc.)
    appliedOn?: Date;        // Date when the leave was applied (optional)
    approvedOn?: Date;       // Date when the leave was approved (optional)
    approvedBy?: number;     // The ID of the admin who approved the leave (optional)
  }