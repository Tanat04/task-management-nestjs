import { IsEnum, IsNotEmpty, IsOptional, IsString, isString } from "class-validator";
import { TaskStatus } from "../task-status.enum";

export class GetTasksFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsNotEmpty()
  @IsOptional()
  @IsString()
  search?: string;
}