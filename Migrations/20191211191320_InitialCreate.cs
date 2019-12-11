using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SISI.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AdministradorItems",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Username = table.Column<string>(nullable: false),
                    Password = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AdministradorItems", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ConvocatoriaItems",
                columns: table => new
                {
                    IdConvocatoria = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FechaInicio = table.Column<DateTime>(nullable: false),
                    FechaFinal = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ConvocatoriaItems", x => x.IdConvocatoria);
                });

            migrationBuilder.CreateTable(
                name: "EstudianteItems",
                columns: table => new
                {
                    Cedula = table.Column<string>(maxLength: 12, nullable: false),
                    TipoDocumento = table.Column<string>(nullable: false),
                    PrimerNombre = table.Column<string>(nullable: false),
                    SegundoNombre = table.Column<string>(nullable: true),
                    PrimerApellido = table.Column<string>(nullable: false),
                    SegundoApellido = table.Column<string>(nullable: false),
                    Genero = table.Column<string>(nullable: false),
                    FechaNacimiento = table.Column<DateTime>(nullable: false),
                    Direccion = table.Column<string>(nullable: false),
                    Telefono = table.Column<string>(maxLength: 15, nullable: false),
                    Email_Personal = table.Column<string>(nullable: false),
                    FechaIngreso = table.Column<DateTime>(nullable: false),
                    Facultad = table.Column<string>(nullable: false),
                    Programa = table.Column<string>(nullable: false),
                    Semestre = table.Column<string>(nullable: false),
                    Email_Institucional = table.Column<string>(nullable: false),
                    Cvlac = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EstudianteItems", x => x.Cedula);
                });

            migrationBuilder.CreateTable(
                name: "EvaluadorItems",
                columns: table => new
                {
                    Cedula = table.Column<string>(maxLength: 12, nullable: false),
                    TipoDocumento = table.Column<string>(nullable: false),
                    PrimerNombre = table.Column<string>(nullable: false),
                    SegundoNombre = table.Column<string>(nullable: true),
                    PrimerApellido = table.Column<string>(nullable: false),
                    SegundoApellido = table.Column<string>(nullable: false),
                    Genero = table.Column<string>(nullable: false),
                    FechaNacimiento = table.Column<DateTime>(nullable: false),
                    Direccion = table.Column<string>(nullable: false),
                    Telefono = table.Column<string>(maxLength: 15, nullable: false),
                    Email_Personal = table.Column<string>(nullable: false),
                    Username = table.Column<string>(nullable: false),
                    Password = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EvaluadorItems", x => x.Cedula);
                });

            migrationBuilder.CreateTable(
                name: "FacultadItems",
                columns: table => new
                {
                    IdFacultad = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FacultadItems", x => x.IdFacultad);
                });

            migrationBuilder.CreateTable(
                name: "GrupoItems",
                columns: table => new
                {
                    IdGrupo = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(nullable: false),
                    LineaInvestigacion = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GrupoItems", x => x.IdGrupo);
                });

            migrationBuilder.CreateTable(
                name: "TutorItems",
                columns: table => new
                {
                    Cedula = table.Column<string>(maxLength: 12, nullable: false),
                    TipoDocumento = table.Column<string>(nullable: false),
                    PrimerNombre = table.Column<string>(nullable: false),
                    SegundoNombre = table.Column<string>(nullable: true),
                    PrimerApellido = table.Column<string>(nullable: false),
                    SegundoApellido = table.Column<string>(nullable: false),
                    Genero = table.Column<string>(nullable: false),
                    FechaNacimiento = table.Column<DateTime>(nullable: false),
                    Direccion = table.Column<string>(nullable: false),
                    Telefono = table.Column<string>(maxLength: 15, nullable: false),
                    Email_Personal = table.Column<string>(nullable: false),
                    FechaIngreso = table.Column<DateTime>(nullable: false),
                    Programa = table.Column<string>(nullable: false),
                    Email_Institucional = table.Column<string>(nullable: false),
                    Cvlac = table.Column<string>(nullable: false),
                    Username = table.Column<string>(nullable: false),
                    Password = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TutorItems", x => x.Cedula);
                });

            migrationBuilder.CreateTable(
                name: "ProgramaItems",
                columns: table => new
                {
                    IdPrograma = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(nullable: false),
                    IdFacultad = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProgramaItems", x => x.IdPrograma);
                    table.ForeignKey(
                        name: "FK_ProgramaItems_FacultadItems_IdFacultad",
                        column: x => x.IdFacultad,
                        principalTable: "FacultadItems",
                        principalColumn: "IdFacultad",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ProgramaItems_IdFacultad",
                table: "ProgramaItems",
                column: "IdFacultad");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AdministradorItems");

            migrationBuilder.DropTable(
                name: "ConvocatoriaItems");

            migrationBuilder.DropTable(
                name: "EstudianteItems");

            migrationBuilder.DropTable(
                name: "EvaluadorItems");

            migrationBuilder.DropTable(
                name: "GrupoItems");

            migrationBuilder.DropTable(
                name: "ProgramaItems");

            migrationBuilder.DropTable(
                name: "TutorItems");

            migrationBuilder.DropTable(
                name: "FacultadItems");
        }
    }
}
