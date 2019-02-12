export const typeDefs = /* GraphQL */ `
  type AggregateDepartment {
    count: Int!
  }

  type AggregateSchool {
    count: Int!
  }

  type AggregateTerm {
    count: Int!
  }

  type AggregateVenue {
    count: Int!
  }

  type BatchPayload {
    count: Long!
  }

  scalar DateTime

  type Department {
    id: ID!
    name: String!
    school: School!
  }

  type DepartmentConnection {
    pageInfo: PageInfo!
    edges: [DepartmentEdge]!
    aggregate: AggregateDepartment!
  }

  input DepartmentCreateInput {
    name: String!
    school: SchoolCreateOneWithoutDepartmentsInput!
  }

  input DepartmentCreateManyWithoutSchoolInput {
    create: [DepartmentCreateWithoutSchoolInput!]
    connect: [DepartmentWhereUniqueInput!]
  }

  input DepartmentCreateWithoutSchoolInput {
    name: String!
  }

  type DepartmentEdge {
    node: Department!
    cursor: String!
  }

  enum DepartmentOrderByInput {
    id_ASC
    id_DESC
    name_ASC
    name_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  type DepartmentPreviousValues {
    id: ID!
    name: String!
  }

  input DepartmentScalarWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    name: String
    name_not: String
    name_in: [String!]
    name_not_in: [String!]
    name_lt: String
    name_lte: String
    name_gt: String
    name_gte: String
    name_contains: String
    name_not_contains: String
    name_starts_with: String
    name_not_starts_with: String
    name_ends_with: String
    name_not_ends_with: String
    AND: [DepartmentScalarWhereInput!]
    OR: [DepartmentScalarWhereInput!]
    NOT: [DepartmentScalarWhereInput!]
  }

  type DepartmentSubscriptionPayload {
    mutation: MutationType!
    node: Department
    updatedFields: [String!]
    previousValues: DepartmentPreviousValues
  }

  input DepartmentSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: DepartmentWhereInput
    AND: [DepartmentSubscriptionWhereInput!]
    OR: [DepartmentSubscriptionWhereInput!]
    NOT: [DepartmentSubscriptionWhereInput!]
  }

  input DepartmentUpdateInput {
    name: String
    school: SchoolUpdateOneRequiredWithoutDepartmentsInput
  }

  input DepartmentUpdateManyDataInput {
    name: String
  }

  input DepartmentUpdateManyMutationInput {
    name: String
  }

  input DepartmentUpdateManyWithoutSchoolInput {
    create: [DepartmentCreateWithoutSchoolInput!]
    delete: [DepartmentWhereUniqueInput!]
    connect: [DepartmentWhereUniqueInput!]
    set: [DepartmentWhereUniqueInput!]
    disconnect: [DepartmentWhereUniqueInput!]
    update: [DepartmentUpdateWithWhereUniqueWithoutSchoolInput!]
    upsert: [DepartmentUpsertWithWhereUniqueWithoutSchoolInput!]
    deleteMany: [DepartmentScalarWhereInput!]
    updateMany: [DepartmentUpdateManyWithWhereNestedInput!]
  }

  input DepartmentUpdateManyWithWhereNestedInput {
    where: DepartmentScalarWhereInput!
    data: DepartmentUpdateManyDataInput!
  }

  input DepartmentUpdateWithoutSchoolDataInput {
    name: String
  }

  input DepartmentUpdateWithWhereUniqueWithoutSchoolInput {
    where: DepartmentWhereUniqueInput!
    data: DepartmentUpdateWithoutSchoolDataInput!
  }

  input DepartmentUpsertWithWhereUniqueWithoutSchoolInput {
    where: DepartmentWhereUniqueInput!
    update: DepartmentUpdateWithoutSchoolDataInput!
    create: DepartmentCreateWithoutSchoolInput!
  }

  input DepartmentWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    name: String
    name_not: String
    name_in: [String!]
    name_not_in: [String!]
    name_lt: String
    name_lte: String
    name_gt: String
    name_gte: String
    name_contains: String
    name_not_contains: String
    name_starts_with: String
    name_not_starts_with: String
    name_ends_with: String
    name_not_ends_with: String
    school: SchoolWhereInput
    AND: [DepartmentWhereInput!]
    OR: [DepartmentWhereInput!]
    NOT: [DepartmentWhereInput!]
  }

  input DepartmentWhereUniqueInput {
    id: ID
  }

  scalar Long

  type Mutation {
    createDepartment(data: DepartmentCreateInput!): Department!
    updateDepartment(data: DepartmentUpdateInput!, where: DepartmentWhereUniqueInput!): Department
    updateManyDepartments(
      data: DepartmentUpdateManyMutationInput!
      where: DepartmentWhereInput
    ): BatchPayload!
    upsertDepartment(
      where: DepartmentWhereUniqueInput!
      create: DepartmentCreateInput!
      update: DepartmentUpdateInput!
    ): Department!
    deleteDepartment(where: DepartmentWhereUniqueInput!): Department
    deleteManyDepartments(where: DepartmentWhereInput): BatchPayload!
    createSchool(data: SchoolCreateInput!): School!
    updateSchool(data: SchoolUpdateInput!, where: SchoolWhereUniqueInput!): School
    updateManySchools(data: SchoolUpdateManyMutationInput!, where: SchoolWhereInput): BatchPayload!
    upsertSchool(
      where: SchoolWhereUniqueInput!
      create: SchoolCreateInput!
      update: SchoolUpdateInput!
    ): School!
    deleteSchool(where: SchoolWhereUniqueInput!): School
    deleteManySchools(where: SchoolWhereInput): BatchPayload!
    createTerm(data: TermCreateInput!): Term!
    updateTerm(data: TermUpdateInput!, where: TermWhereUniqueInput!): Term
    updateManyTerms(data: TermUpdateManyMutationInput!, where: TermWhereInput): BatchPayload!
    upsertTerm(
      where: TermWhereUniqueInput!
      create: TermCreateInput!
      update: TermUpdateInput!
    ): Term!
    deleteTerm(where: TermWhereUniqueInput!): Term
    deleteManyTerms(where: TermWhereInput): BatchPayload!
    createVenue(data: VenueCreateInput!): Venue!
    updateVenue(data: VenueUpdateInput!, where: VenueWhereUniqueInput!): Venue
    updateManyVenues(data: VenueUpdateManyMutationInput!, where: VenueWhereInput): BatchPayload!
    upsertVenue(
      where: VenueWhereUniqueInput!
      create: VenueCreateInput!
      update: VenueUpdateInput!
    ): Venue!
    deleteVenue(where: VenueWhereUniqueInput!): Venue
    deleteManyVenues(where: VenueWhereInput): BatchPayload!
  }

  enum MutationType {
    CREATED
    UPDATED
    DELETED
  }

  interface Node {
    id: ID!
  }

  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String
    endCursor: String
  }

  type Query {
    department(where: DepartmentWhereUniqueInput!): Department
    departments(
      where: DepartmentWhereInput
      orderBy: DepartmentOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Department]!
    departmentsConnection(
      where: DepartmentWhereInput
      orderBy: DepartmentOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): DepartmentConnection!
    school(where: SchoolWhereUniqueInput!): School
    schools(
      where: SchoolWhereInput
      orderBy: SchoolOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [School]!
    schoolsConnection(
      where: SchoolWhereInput
      orderBy: SchoolOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): SchoolConnection!
    term(where: TermWhereUniqueInput!): Term
    terms(
      where: TermWhereInput
      orderBy: TermOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Term]!
    termsConnection(
      where: TermWhereInput
      orderBy: TermOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): TermConnection!
    venue(where: VenueWhereUniqueInput!): Venue
    venues(
      where: VenueWhereInput
      orderBy: VenueOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Venue]!
    venuesConnection(
      where: VenueWhereInput
      orderBy: VenueOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): VenueConnection!
    node(id: ID!): Node
  }

  type School {
    id: ID!
    longName: String!
    shortName: String
    terms(
      where: TermWhereInput
      orderBy: TermOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Term!]
    departments(
      where: DepartmentWhereInput
      orderBy: DepartmentOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Department!]
  }

  type SchoolConnection {
    pageInfo: PageInfo!
    edges: [SchoolEdge]!
    aggregate: AggregateSchool!
  }

  input SchoolCreateInput {
    longName: String!
    shortName: String
    terms: TermCreateManyWithoutSchoolInput
    departments: DepartmentCreateManyWithoutSchoolInput
  }

  input SchoolCreateOneWithoutDepartmentsInput {
    create: SchoolCreateWithoutDepartmentsInput
    connect: SchoolWhereUniqueInput
  }

  input SchoolCreateOneWithoutTermsInput {
    create: SchoolCreateWithoutTermsInput
    connect: SchoolWhereUniqueInput
  }

  input SchoolCreateWithoutDepartmentsInput {
    longName: String!
    shortName: String
    terms: TermCreateManyWithoutSchoolInput
  }

  input SchoolCreateWithoutTermsInput {
    longName: String!
    shortName: String
    departments: DepartmentCreateManyWithoutSchoolInput
  }

  type SchoolEdge {
    node: School!
    cursor: String!
  }

  enum SchoolOrderByInput {
    id_ASC
    id_DESC
    longName_ASC
    longName_DESC
    shortName_ASC
    shortName_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  type SchoolPreviousValues {
    id: ID!
    longName: String!
    shortName: String
  }

  type SchoolSubscriptionPayload {
    mutation: MutationType!
    node: School
    updatedFields: [String!]
    previousValues: SchoolPreviousValues
  }

  input SchoolSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: SchoolWhereInput
    AND: [SchoolSubscriptionWhereInput!]
    OR: [SchoolSubscriptionWhereInput!]
    NOT: [SchoolSubscriptionWhereInput!]
  }

  input SchoolUpdateInput {
    longName: String
    shortName: String
    terms: TermUpdateManyWithoutSchoolInput
    departments: DepartmentUpdateManyWithoutSchoolInput
  }

  input SchoolUpdateManyMutationInput {
    longName: String
    shortName: String
  }

  input SchoolUpdateOneRequiredWithoutDepartmentsInput {
    create: SchoolCreateWithoutDepartmentsInput
    update: SchoolUpdateWithoutDepartmentsDataInput
    upsert: SchoolUpsertWithoutDepartmentsInput
    connect: SchoolWhereUniqueInput
  }

  input SchoolUpdateOneRequiredWithoutTermsInput {
    create: SchoolCreateWithoutTermsInput
    update: SchoolUpdateWithoutTermsDataInput
    upsert: SchoolUpsertWithoutTermsInput
    connect: SchoolWhereUniqueInput
  }

  input SchoolUpdateWithoutDepartmentsDataInput {
    longName: String
    shortName: String
    terms: TermUpdateManyWithoutSchoolInput
  }

  input SchoolUpdateWithoutTermsDataInput {
    longName: String
    shortName: String
    departments: DepartmentUpdateManyWithoutSchoolInput
  }

  input SchoolUpsertWithoutDepartmentsInput {
    update: SchoolUpdateWithoutDepartmentsDataInput!
    create: SchoolCreateWithoutDepartmentsInput!
  }

  input SchoolUpsertWithoutTermsInput {
    update: SchoolUpdateWithoutTermsDataInput!
    create: SchoolCreateWithoutTermsInput!
  }

  input SchoolWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    longName: String
    longName_not: String
    longName_in: [String!]
    longName_not_in: [String!]
    longName_lt: String
    longName_lte: String
    longName_gt: String
    longName_gte: String
    longName_contains: String
    longName_not_contains: String
    longName_starts_with: String
    longName_not_starts_with: String
    longName_ends_with: String
    longName_not_ends_with: String
    shortName: String
    shortName_not: String
    shortName_in: [String!]
    shortName_not_in: [String!]
    shortName_lt: String
    shortName_lte: String
    shortName_gt: String
    shortName_gte: String
    shortName_contains: String
    shortName_not_contains: String
    shortName_starts_with: String
    shortName_not_starts_with: String
    shortName_ends_with: String
    shortName_not_ends_with: String
    terms_every: TermWhereInput
    terms_some: TermWhereInput
    terms_none: TermWhereInput
    departments_every: DepartmentWhereInput
    departments_some: DepartmentWhereInput
    departments_none: DepartmentWhereInput
    AND: [SchoolWhereInput!]
    OR: [SchoolWhereInput!]
    NOT: [SchoolWhereInput!]
  }

  input SchoolWhereUniqueInput {
    id: ID
    longName: String
  }

  type Subscription {
    department(where: DepartmentSubscriptionWhereInput): DepartmentSubscriptionPayload
    school(where: SchoolSubscriptionWhereInput): SchoolSubscriptionPayload
    term(where: TermSubscriptionWhereInput): TermSubscriptionPayload
    venue(where: VenueSubscriptionWhereInput): VenueSubscriptionPayload
  }

  type Term {
    id: ID!
    name: String!
    startsAt: DateTime!
    endsAt: DateTime!
    school: School!
    venues(
      where: VenueWhereInput
      orderBy: VenueOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Venue!]
  }

  type TermConnection {
    pageInfo: PageInfo!
    edges: [TermEdge]!
    aggregate: AggregateTerm!
  }

  input TermCreateInput {
    name: String!
    startsAt: DateTime!
    endsAt: DateTime!
    school: SchoolCreateOneWithoutTermsInput!
    venues: VenueCreateManyWithoutTermsInput
  }

  input TermCreateManyWithoutSchoolInput {
    create: [TermCreateWithoutSchoolInput!]
    connect: [TermWhereUniqueInput!]
  }

  input TermCreateManyWithoutVenuesInput {
    create: [TermCreateWithoutVenuesInput!]
    connect: [TermWhereUniqueInput!]
  }

  input TermCreateWithoutSchoolInput {
    name: String!
    startsAt: DateTime!
    endsAt: DateTime!
    venues: VenueCreateManyWithoutTermsInput
  }

  input TermCreateWithoutVenuesInput {
    name: String!
    startsAt: DateTime!
    endsAt: DateTime!
    school: SchoolCreateOneWithoutTermsInput!
  }

  type TermEdge {
    node: Term!
    cursor: String!
  }

  enum TermOrderByInput {
    id_ASC
    id_DESC
    name_ASC
    name_DESC
    startsAt_ASC
    startsAt_DESC
    endsAt_ASC
    endsAt_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  type TermPreviousValues {
    id: ID!
    name: String!
    startsAt: DateTime!
    endsAt: DateTime!
  }

  input TermScalarWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    name: String
    name_not: String
    name_in: [String!]
    name_not_in: [String!]
    name_lt: String
    name_lte: String
    name_gt: String
    name_gte: String
    name_contains: String
    name_not_contains: String
    name_starts_with: String
    name_not_starts_with: String
    name_ends_with: String
    name_not_ends_with: String
    startsAt: DateTime
    startsAt_not: DateTime
    startsAt_in: [DateTime!]
    startsAt_not_in: [DateTime!]
    startsAt_lt: DateTime
    startsAt_lte: DateTime
    startsAt_gt: DateTime
    startsAt_gte: DateTime
    endsAt: DateTime
    endsAt_not: DateTime
    endsAt_in: [DateTime!]
    endsAt_not_in: [DateTime!]
    endsAt_lt: DateTime
    endsAt_lte: DateTime
    endsAt_gt: DateTime
    endsAt_gte: DateTime
    AND: [TermScalarWhereInput!]
    OR: [TermScalarWhereInput!]
    NOT: [TermScalarWhereInput!]
  }

  type TermSubscriptionPayload {
    mutation: MutationType!
    node: Term
    updatedFields: [String!]
    previousValues: TermPreviousValues
  }

  input TermSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: TermWhereInput
    AND: [TermSubscriptionWhereInput!]
    OR: [TermSubscriptionWhereInput!]
    NOT: [TermSubscriptionWhereInput!]
  }

  input TermUpdateInput {
    name: String
    startsAt: DateTime
    endsAt: DateTime
    school: SchoolUpdateOneRequiredWithoutTermsInput
    venues: VenueUpdateManyWithoutTermsInput
  }

  input TermUpdateManyDataInput {
    name: String
    startsAt: DateTime
    endsAt: DateTime
  }

  input TermUpdateManyMutationInput {
    name: String
    startsAt: DateTime
    endsAt: DateTime
  }

  input TermUpdateManyWithoutSchoolInput {
    create: [TermCreateWithoutSchoolInput!]
    delete: [TermWhereUniqueInput!]
    connect: [TermWhereUniqueInput!]
    set: [TermWhereUniqueInput!]
    disconnect: [TermWhereUniqueInput!]
    update: [TermUpdateWithWhereUniqueWithoutSchoolInput!]
    upsert: [TermUpsertWithWhereUniqueWithoutSchoolInput!]
    deleteMany: [TermScalarWhereInput!]
    updateMany: [TermUpdateManyWithWhereNestedInput!]
  }

  input TermUpdateManyWithoutVenuesInput {
    create: [TermCreateWithoutVenuesInput!]
    delete: [TermWhereUniqueInput!]
    connect: [TermWhereUniqueInput!]
    set: [TermWhereUniqueInput!]
    disconnect: [TermWhereUniqueInput!]
    update: [TermUpdateWithWhereUniqueWithoutVenuesInput!]
    upsert: [TermUpsertWithWhereUniqueWithoutVenuesInput!]
    deleteMany: [TermScalarWhereInput!]
    updateMany: [TermUpdateManyWithWhereNestedInput!]
  }

  input TermUpdateManyWithWhereNestedInput {
    where: TermScalarWhereInput!
    data: TermUpdateManyDataInput!
  }

  input TermUpdateWithoutSchoolDataInput {
    name: String
    startsAt: DateTime
    endsAt: DateTime
    venues: VenueUpdateManyWithoutTermsInput
  }

  input TermUpdateWithoutVenuesDataInput {
    name: String
    startsAt: DateTime
    endsAt: DateTime
    school: SchoolUpdateOneRequiredWithoutTermsInput
  }

  input TermUpdateWithWhereUniqueWithoutSchoolInput {
    where: TermWhereUniqueInput!
    data: TermUpdateWithoutSchoolDataInput!
  }

  input TermUpdateWithWhereUniqueWithoutVenuesInput {
    where: TermWhereUniqueInput!
    data: TermUpdateWithoutVenuesDataInput!
  }

  input TermUpsertWithWhereUniqueWithoutSchoolInput {
    where: TermWhereUniqueInput!
    update: TermUpdateWithoutSchoolDataInput!
    create: TermCreateWithoutSchoolInput!
  }

  input TermUpsertWithWhereUniqueWithoutVenuesInput {
    where: TermWhereUniqueInput!
    update: TermUpdateWithoutVenuesDataInput!
    create: TermCreateWithoutVenuesInput!
  }

  input TermWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    name: String
    name_not: String
    name_in: [String!]
    name_not_in: [String!]
    name_lt: String
    name_lte: String
    name_gt: String
    name_gte: String
    name_contains: String
    name_not_contains: String
    name_starts_with: String
    name_not_starts_with: String
    name_ends_with: String
    name_not_ends_with: String
    startsAt: DateTime
    startsAt_not: DateTime
    startsAt_in: [DateTime!]
    startsAt_not_in: [DateTime!]
    startsAt_lt: DateTime
    startsAt_lte: DateTime
    startsAt_gt: DateTime
    startsAt_gte: DateTime
    endsAt: DateTime
    endsAt_not: DateTime
    endsAt_in: [DateTime!]
    endsAt_not_in: [DateTime!]
    endsAt_lt: DateTime
    endsAt_lte: DateTime
    endsAt_gt: DateTime
    endsAt_gte: DateTime
    school: SchoolWhereInput
    venues_every: VenueWhereInput
    venues_some: VenueWhereInput
    venues_none: VenueWhereInput
    AND: [TermWhereInput!]
    OR: [TermWhereInput!]
    NOT: [TermWhereInput!]
  }

  input TermWhereUniqueInput {
    id: ID
  }

  type Venue {
    id: ID!
    code: String!
    name: String!
    floor: String
    lat: Float
    lng: Float
    altitude: Int
    terms(
      where: TermWhereInput
      orderBy: TermOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Term!]
  }

  type VenueConnection {
    pageInfo: PageInfo!
    edges: [VenueEdge]!
    aggregate: AggregateVenue!
  }

  input VenueCreateInput {
    code: String!
    name: String!
    floor: String
    lat: Float
    lng: Float
    altitude: Int
    terms: TermCreateManyWithoutVenuesInput
  }

  input VenueCreateManyWithoutTermsInput {
    create: [VenueCreateWithoutTermsInput!]
    connect: [VenueWhereUniqueInput!]
  }

  input VenueCreateWithoutTermsInput {
    code: String!
    name: String!
    floor: String
    lat: Float
    lng: Float
    altitude: Int
  }

  type VenueEdge {
    node: Venue!
    cursor: String!
  }

  enum VenueOrderByInput {
    id_ASC
    id_DESC
    code_ASC
    code_DESC
    name_ASC
    name_DESC
    floor_ASC
    floor_DESC
    lat_ASC
    lat_DESC
    lng_ASC
    lng_DESC
    altitude_ASC
    altitude_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  type VenuePreviousValues {
    id: ID!
    code: String!
    name: String!
    floor: String
    lat: Float
    lng: Float
    altitude: Int
  }

  input VenueScalarWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    code: String
    code_not: String
    code_in: [String!]
    code_not_in: [String!]
    code_lt: String
    code_lte: String
    code_gt: String
    code_gte: String
    code_contains: String
    code_not_contains: String
    code_starts_with: String
    code_not_starts_with: String
    code_ends_with: String
    code_not_ends_with: String
    name: String
    name_not: String
    name_in: [String!]
    name_not_in: [String!]
    name_lt: String
    name_lte: String
    name_gt: String
    name_gte: String
    name_contains: String
    name_not_contains: String
    name_starts_with: String
    name_not_starts_with: String
    name_ends_with: String
    name_not_ends_with: String
    floor: String
    floor_not: String
    floor_in: [String!]
    floor_not_in: [String!]
    floor_lt: String
    floor_lte: String
    floor_gt: String
    floor_gte: String
    floor_contains: String
    floor_not_contains: String
    floor_starts_with: String
    floor_not_starts_with: String
    floor_ends_with: String
    floor_not_ends_with: String
    lat: Float
    lat_not: Float
    lat_in: [Float!]
    lat_not_in: [Float!]
    lat_lt: Float
    lat_lte: Float
    lat_gt: Float
    lat_gte: Float
    lng: Float
    lng_not: Float
    lng_in: [Float!]
    lng_not_in: [Float!]
    lng_lt: Float
    lng_lte: Float
    lng_gt: Float
    lng_gte: Float
    altitude: Int
    altitude_not: Int
    altitude_in: [Int!]
    altitude_not_in: [Int!]
    altitude_lt: Int
    altitude_lte: Int
    altitude_gt: Int
    altitude_gte: Int
    AND: [VenueScalarWhereInput!]
    OR: [VenueScalarWhereInput!]
    NOT: [VenueScalarWhereInput!]
  }

  type VenueSubscriptionPayload {
    mutation: MutationType!
    node: Venue
    updatedFields: [String!]
    previousValues: VenuePreviousValues
  }

  input VenueSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: VenueWhereInput
    AND: [VenueSubscriptionWhereInput!]
    OR: [VenueSubscriptionWhereInput!]
    NOT: [VenueSubscriptionWhereInput!]
  }

  input VenueUpdateInput {
    code: String
    name: String
    floor: String
    lat: Float
    lng: Float
    altitude: Int
    terms: TermUpdateManyWithoutVenuesInput
  }

  input VenueUpdateManyDataInput {
    code: String
    name: String
    floor: String
    lat: Float
    lng: Float
    altitude: Int
  }

  input VenueUpdateManyMutationInput {
    code: String
    name: String
    floor: String
    lat: Float
    lng: Float
    altitude: Int
  }

  input VenueUpdateManyWithoutTermsInput {
    create: [VenueCreateWithoutTermsInput!]
    delete: [VenueWhereUniqueInput!]
    connect: [VenueWhereUniqueInput!]
    set: [VenueWhereUniqueInput!]
    disconnect: [VenueWhereUniqueInput!]
    update: [VenueUpdateWithWhereUniqueWithoutTermsInput!]
    upsert: [VenueUpsertWithWhereUniqueWithoutTermsInput!]
    deleteMany: [VenueScalarWhereInput!]
    updateMany: [VenueUpdateManyWithWhereNestedInput!]
  }

  input VenueUpdateManyWithWhereNestedInput {
    where: VenueScalarWhereInput!
    data: VenueUpdateManyDataInput!
  }

  input VenueUpdateWithoutTermsDataInput {
    code: String
    name: String
    floor: String
    lat: Float
    lng: Float
    altitude: Int
  }

  input VenueUpdateWithWhereUniqueWithoutTermsInput {
    where: VenueWhereUniqueInput!
    data: VenueUpdateWithoutTermsDataInput!
  }

  input VenueUpsertWithWhereUniqueWithoutTermsInput {
    where: VenueWhereUniqueInput!
    update: VenueUpdateWithoutTermsDataInput!
    create: VenueCreateWithoutTermsInput!
  }

  input VenueWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    code: String
    code_not: String
    code_in: [String!]
    code_not_in: [String!]
    code_lt: String
    code_lte: String
    code_gt: String
    code_gte: String
    code_contains: String
    code_not_contains: String
    code_starts_with: String
    code_not_starts_with: String
    code_ends_with: String
    code_not_ends_with: String
    name: String
    name_not: String
    name_in: [String!]
    name_not_in: [String!]
    name_lt: String
    name_lte: String
    name_gt: String
    name_gte: String
    name_contains: String
    name_not_contains: String
    name_starts_with: String
    name_not_starts_with: String
    name_ends_with: String
    name_not_ends_with: String
    floor: String
    floor_not: String
    floor_in: [String!]
    floor_not_in: [String!]
    floor_lt: String
    floor_lte: String
    floor_gt: String
    floor_gte: String
    floor_contains: String
    floor_not_contains: String
    floor_starts_with: String
    floor_not_starts_with: String
    floor_ends_with: String
    floor_not_ends_with: String
    lat: Float
    lat_not: Float
    lat_in: [Float!]
    lat_not_in: [Float!]
    lat_lt: Float
    lat_lte: Float
    lat_gt: Float
    lat_gte: Float
    lng: Float
    lng_not: Float
    lng_in: [Float!]
    lng_not_in: [Float!]
    lng_lt: Float
    lng_lte: Float
    lng_gt: Float
    lng_gte: Float
    altitude: Int
    altitude_not: Int
    altitude_in: [Int!]
    altitude_not_in: [Int!]
    altitude_lt: Int
    altitude_lte: Int
    altitude_gt: Int
    altitude_gte: Int
    terms_every: TermWhereInput
    terms_some: TermWhereInput
    terms_none: TermWhereInput
    AND: [VenueWhereInput!]
    OR: [VenueWhereInput!]
    NOT: [VenueWhereInput!]
  }

  input VenueWhereUniqueInput {
    id: ID
  }
`;
