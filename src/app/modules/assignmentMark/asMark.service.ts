import { IAssignement } from "../assignments/assignment.interface";
import { userInterface } from "../users/user.interface";
import { AssignmentMarks } from "./asMark.model";
import {
  IAssignmentMarks,
  IResponseAssignmentsMarks,
} from "./asMarks.interface";

interface IAssignmentWithId extends IAssignement {
  id: string;
}
interface IuserInterfaceWithId extends userInterface {
  id: string;
}

const postAssignmentMarks = async (
  payload: IAssignmentMarks
): Promise<IAssignmentMarks | null> => {
  const result = await AssignmentMarks.create(payload);
  return result;
};
const getAllAssignmentMarks = async (): Promise<
  IResponseAssignmentsMarks[] | []
> => {
  const allAssignmentsMarks = await AssignmentMarks.find({}).populate([
    "student_id",
    "assignment_id",
  ]);
  const modifeidAssignemntMarks = allAssignmentsMarks.map(
    (result: IAssignmentMarks) => ({
      id: result?.id,
      student_id: (result?.student_id as IuserInterfaceWithId)?.id,
      student_name: (result?.student_id as IuserInterfaceWithId)?.name,
      assignment_id: (result?.assignment_id as IAssignmentWithId)?.id,
      title: (result?.assignment_id as IAssignmentWithId)?.title,
      totalMark: result?.totalMark,
      mark: result?.mark,
      repo_link: result?.repo_link,
      status: result?.status,
      assingMarks: result?.assingMarks || "0",
    })
  );
  return modifeidAssignemntMarks;
};

const updateAssignmentMarks = async (
  id: string,
  payload: Partial<IAssignmentMarks>
): Promise<IAssignmentMarks | null> => {
  const isExist = await AssignmentMarks.findOne({ _id: id });
  if (!isExist) {
    throw new Error("Assignment Not Found");
  }
  const updatedData: Partial<IAssignmentMarks> = { ...payload };
  const result = await AssignmentMarks.findOneAndUpdate(
    { _id: id },
    updatedData,
    {
      new: true,
    }
  );
  return result;
};

export const AssignmentMarksService = {
  postAssignmentMarks,
  getAllAssignmentMarks,
  updateAssignmentMarks,
};
