import { IsEnum, IsNotEmpty, IsOptional, IsString, isString } from "class-validator";
import { TaskStatus } from "../tasks.model";

export class GetTasksFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsNotEmpty()
  @IsOptional()
  @IsString()
  search?: string;
}